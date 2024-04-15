import React from "react";
import { generateRandomString } from "@/app/_lib/RandomString";

export default function TextArea({
  id = "",
  label = "",
  name = "",
  required = false,
  className = "",
  value = "",
  onChange = () => null,
  ...props
}: Readonly<{
  id?: string;
  label?: string;
  name?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}>) {
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
      <div className={`mt-2 ${className}`}>
        <textarea
          id={usingId}
          name={name}
          required={required}
          className={`text-xl block w-full rounded-md border-0 p-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-900 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${className}`}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
}
