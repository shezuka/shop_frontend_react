import React from "react";
import { AssetUploaderPropsType } from "@/app/_types/AssetUploader";
import Button from "@/app/_components/Button";
import axios from "axios";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";

function AssetUploader(props: AssetUploaderPropsType) {
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const [loading, setLoading] = React.useState(false);

  const onSelectFileClick = () => {
    if (!inputFileRef.current) return;
    inputFileRef.current.click();
  };

  function onFileSelected(e: any) {
    const files = e.target.files;
    if (!files.length) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) {
        setLoading(false);
        return;
      }
      const data = e.target.result as ArrayBuffer;
      axios
        .get("/admin/assets/upload-link")
        .then((resp) => {
          const key = resp.data.key;
          const type = files[0].type;

          const formData = new FormData();
          formData.append("file", new Blob([data], { type }));

          return axios
            .post("/admin/assets/upload", formData, {
              params: {
                key,
                type,
              },
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((resp) => {
              if (resp.status >= 200 && resp.status < 300) {
                props.onChange(resp.data.asset_id);
              }
            });
        })
        .finally(() => {
          setLoading(false);
        });
    };
    reader.onerror = (e) => {
      console.error(e);
      setLoading(false);
    };
    reader.readAsArrayBuffer(files[0]);
  }

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <input
            ref={inputFileRef}
            type="file"
            className="hidden"
            accept={props.accept}
            onChange={onFileSelected}
          />
          <div className="flex flex-row">
            <Button type="button" onClick={onSelectFileClick}>
              {props.label}
            </Button>
            {props.removable && props.value ? (
              <Button
                type="button"
                className="bg-red-500 hover:bg-red-700"
                onClick={() => props.onChange(null)}
              >
                Remove asset
              </Button>
            ) : null}
          </div>
          {props.showImage && props.value ? (
            <img
              className="w-52 mt-2"
              src={`${axios.defaults.baseURL}/assets/${props.value}`}
            />
          ) : null}
        </>
      )}
    </>
  );
}

export default AssetUploader;
