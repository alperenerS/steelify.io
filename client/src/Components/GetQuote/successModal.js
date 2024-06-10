import React from "react";
import { Modal, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const SuccessModal = ({ visible, onOk }) => {
  return (
    <Modal
      open={visible}
      onCancel={onOk}
      footer={[
        <Button key="submit" type="primary" onClick={onOk}>
          Go to Request Details
        </Button>,
      ]}
      centered
    >
      <div style={{ textAlign: "center" }}>
        <CheckCircleOutlined style={{ fontSize: 48, color: "#52c41a" }} />
        <p style={{ marginTop: "16px", fontSize: "16px", fontWeight: "bold" }}>
          Your quote request has been received!
        </p>
        <p>
          We will review it and get back to you via email as soon as possible.
        </p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
