"use client";

import React from "react";
import Modal from "@/app/_components/Modal";
import Button from "@/app/_components/Button";
import ClipboardText from "@/app/_components/ClipboardText";

type AboutModalPropsType = Readonly<{}>;

const HaveSeenModalLSKey = "haveSeenAboutModal";

function AboutModal(props: AboutModalPropsType) {
  const [showModal, setShowModal] = React.useState(
    localStorage.getItem(HaveSeenModalLSKey) !== "1",
  );

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem(HaveSeenModalLSKey, "1");
  };

  if (!showModal) return null;

  return (
    <Modal>
      <div className="flex flex-col p-2">
        <p>
          This is not a web-store. This is portfolio sample web-site sample
          developed by Dmytro Horbalynskyi.
          <br />
          It is sandbox project so you can do whatever you want with it.
          <br />
          Admin panel login and password:{" "}
          <ClipboardText>dihordev</ClipboardText>
        </p>
        <div className="mt-2">
          <Button size="md" className="w-full" onClick={handleClose}>
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default AboutModal;
