import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const FileUpload = ({ onFileListChange }) => {
  const allowedExtensions = [
    ".xlsx",
    ".step",
    ".stp",
    ".dwg",
    ".dxf",
    ".pdf",
    ".mp4",
  ];

  const beforeUpload = (file) => {
    const isAllowed = allowedExtensions.some((extension) =>
      file.name.endsWith(extension)
    );
    if (!isAllowed) {
      message.error(`${file.name} is not a supported file type.`);
    }
    return false;
  };

  const onChange = (info) => {
    const newFiles = info.fileList.map((file) =>
      file.originFileObj ? file.originFileObj : file
    );
    onFileListChange(newFiles);
  };

  return (
    <Dragger
      name="file"
      multiple={true}
      beforeUpload={beforeUpload}
      onChange={onChange}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">UPLOAD LISTS & DRAWINGS</p>
      <p className="ant-upload-hint">
        Supported file types: {allowedExtensions.join(", ")} <br />
        Supports single or bulk upload. Strictly prohibit from uploading company
        data or other banned files.
      </p>
    </Dragger>
  );
};

export default FileUpload;
