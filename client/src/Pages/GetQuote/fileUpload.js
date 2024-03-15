import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const FileUpload = () => {
  const allowedExtensions = [".xlsx", ".step", ".stp", ".dwg", ".dxf", ".pdf"];

  const beforeUpload = (file) => {
    const isAllowedType = allowedExtensions.some((extension) =>
      file.name.toLowerCase().endsWith(extension)
    );
    if (!isAllowedType) {
      message.error(
        `${
          file.name
        } is not a supported file type. Supported types are: ${allowedExtensions.join(
          ", "
        )}`
      );
    }
    return isAllowedType || Upload.LIST_IGNORE;
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://example.com/upload",
    beforeUpload,
    onChange(info) {
      const { status, name } = info.file;
      if (status === "done") {
        message.success(`${name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        UPLOAD LISTS & DRAWINGS
      </p>
      <p className="ant-upload-hint">
        Supported file types: {allowedExtensions.join(", ")} <br />
        Supports single or bulk upload. Strictly prohibit from uploading company
        data or other banned files.
      </p>
    </Dragger>
  );
};

export default FileUpload;
