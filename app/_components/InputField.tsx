"use client";

import React from "react";
import { generateRandomString } from "@/app/_lib/RandomString";

function InputField(
  {
    id = "",
    label = "",
    name = "",
    type = "text",
    autoComplete = "",
    required = false,
    className = "",
    value = "",
    disabled = false,
    placeholder = "",
    onChange = () => null,
    ...props
  }: Readonly<{
    id?: string;
    label?: string;
    name?: string;
    type?: string;
    autoComplete?: string;
    required?: boolean;
    className?: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }>,
  ref: React.Ref<HTMLInputElement>,
) {
  const [usingId, setUsingId] = React.useState(id);

  React.useEffect(() => {
    setUsingId(id ? id : generateRandomString(10));
  }, [id]);

  return (
    <div>
      {label ? (
        <label
          htmlFor={usingId}
          className={`block md:text-xl sm:text-md font-medium leading-6 ${className}`}
        >
          {label}
        </label>
      ) : null}
      <div className={`${className}`}>
        <input
          id={usingId}
          ref={ref}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className={`text-xl block w-full rounded-md border-0 p-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-900 placeholder:text-primary-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 disabled:bg-primary-700 ${className}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(InputField);
