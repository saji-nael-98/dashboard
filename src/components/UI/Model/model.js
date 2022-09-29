import Modal from "antd/lib/modal/Modal";
import { createPortal } from "react-dom";

import React from "react";
import { Button } from "antd";
import { useState } from "react";
const CustomModel = (props) => {
  const Footer = () => (
    <div
      style={{
        display: "flex",
      }}
    >
      <Button>تم</Button>
    </div>
  );
  return (
    <Modal
      headStyle={{ backgroundColor: "red" }}
      open={true}
      title="فشل تسجيل الدخول"
      footer={[<Footer />]}
    >
      <p>test</p>
    </Modal>
  );
};
const ProjectModel = (props) => {
  const [open, setOpen] = useState(props.open);
  const showModalHandler = () => {
    setOpen(true);
  };

  const handleOkHandler = () => {
    setOpen(false);
  };

  const handleCancelHandler = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      {createPortal(
        <CustomModel open={props.open} />,
        document.getElementById("model-root")
      )}
    </React.Fragment>
  );
};
export default ProjectModel;
