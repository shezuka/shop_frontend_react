"use client";

import React from "react";
import toast from "react-hot-toast";

type ClipboardTextPropsType = Readonly<{
  children: string;
}>;

function ClipboardText(props: ClipboardTextPropsType) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.children).then(() => {
      toast("Text copied to clipboard");
    });
  };
  return (
    <code
      className="cursor-pointer select-none bg-primary-800 p-1 m-1 rounded-sm text-primary-100"
      onClick={copyToClipboard}
    >
      {props.children}
    </code>
  );
}

export default ClipboardText;
