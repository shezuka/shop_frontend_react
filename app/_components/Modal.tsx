"use client";

import React from "react";
import ReactDOM from "react-dom";

type ModalPropsType = Readonly<{
  children?: React.ReactNode;
  onClose?: () => void;
}>;

function Modal({ onClose, children }: ModalPropsType) {
  const [elem, setElem] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!elem) {
      const intervalInstance = setInterval(() => {
        const newElem = document.getElementById("modals-root");
        if (newElem) {
          setElem(newElem);
          clearInterval(intervalInstance);
        }
      }, 100);
      return () => {
        if (intervalInstance) clearInterval(intervalInstance);
      };
    }
  }, [elem]);

  if (!elem) return null;
  return ReactDOM.createPortal(
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-950 z-10 opacity-80" />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center z-20 pointer-events-auto"
        onClick={onClose}
      >
        <div className="absolute bg-primary-100 top-1/4 rounded-md">
          {children}
        </div>
      </div>
    </>,
    elem,
  );
}

export default Modal;
