"use client";

import React, { useRef, useState } from "react";
import InputField from "@/app/_components/InputField";
import axios from "@/app/_utils/axios";

type ApiAutocompletePropsType = {
  label: string;
  value: number | undefined | null;
  onChange: (newAssetId: number | null) => void;
  searchApi: string;
  idFieldName: string;
  labelFieldName: string;
  exceptIds?: number[];
};

function ApiAutocomplete(props: ApiAutocompletePropsType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [loading, setLoading] = useState(typeof props.value === "number");
  const [fieldValue, setFieldValue] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const [inputFocused, setInputFocused] = useState(false);

  const idFieldName = props.idFieldName ? props.idFieldName : "id";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value);
    if (!e.target.value) {
      setSelectedItem(null);
      props.onChange(null);
    }
  };

  React.useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.onfocus = () => setInputFocused(true);

    window.addEventListener("click", (e) => {
      if (!containerRef.current || !e.target) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setInputFocused(false);
      }
    });
  }, []);

  React.useEffect(() => {
    if (typeof props.value !== "number") return;

    let cancel = false;
    axios
      .get(`${props.searchApi}/${props.value}`)
      .then((resp) => {
        setSelectedItem(resp.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        if (cancel) return;
        setLoading(false);
      });

    return () => {
      cancel = true;
    };
  }, [props.searchApi, props.value]);

  React.useEffect(() => {
    if (!selectedItem) return;
    setFieldValue(selectedItem[props.labelFieldName]);
    props.onChange(selectedItem[idFieldName]);
  }, [selectedItem, props.labelFieldName, idFieldName]);

  React.useEffect(() => {
    if (!fieldValue) {
      setOptions([]);
      return;
    }

    let cancel = false;
    const timeoutInstance = setTimeout(() => {
      axios
        .get(props.searchApi, {
          params: {
            offset: 0,
            limit: 30,
            q: fieldValue,
            except_ids: props.exceptIds,
          },
        })
        .then((resp) => {
          if (cancel) return;
          setOptions(resp.data);
        });
    }, 250);

    return () => {
      clearTimeout(timeoutInstance);
      cancel = true;
    };
  }, [fieldValue, props.searchApi, props.exceptIds]);

  return (
    <div ref={containerRef} className="relative">
      <InputField
        ref={inputRef}
        label={props.label}
        value={fieldValue}
        onChange={onChange}
        disabled={loading}
      />
      <div className="absolute w-full top-full">
        {inputFocused &&
          options.map((it) => (
            <div
              key={it[idFieldName]}
              className="cursor-pointer px-2 py-1.5 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => {
                setFieldValue(it[props.labelFieldName]);
                props.onChange(it[idFieldName]);
                inputRef.current && inputRef.current.blur();
                setInputFocused(false);
              }}
            >
              {it[props.labelFieldName]}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ApiAutocomplete;