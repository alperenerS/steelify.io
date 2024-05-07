import React, { useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const FileUpload = ({ onFileListChange }) => {
  const [fileList, setFileList] = useState([]);

  const allowedExtensions = [
    ".xlsx",
    ".step",
    ".stp",
    ".dwg",
    ".dxf",
    ".pdf",
    ".mp4",
  ];

  const fileExtensionsString = allowedExtensions.join(",");

  const beforeUpload = (file) => {
    const isAllowed = allowedExtensions.some(extension =>
      file.name.toLowerCase().endsWith(extension)
    );
    if (!isAllowed) {
      message.error(`${file.name} is not a supported file type.`);
      return Upload.LIST_IGNORE; // This will prevent the file from being added to the list
    }
    return false;
  };

  const onChange = (info) => {
    if (info.fileList.length > 10) {
      message.error(`You can upload up to 10 files. You have tried to upload ${info.fileList.length}. Please remove excess files.`);
      info.fileList = info.fileList.slice(0, 10);
    }

    // Map through fileList to ensure we're working with the originFileObjs
    const newFiles = info.fileList.map(file => file.originFileObj ? file.originFileObj : file);
    setFileList(newFiles);
    onFileListChange(newFiles);
  };

  return (
    <Dragger
      name="file"
      multiple={true}
      beforeUpload={beforeUpload}
      onChange={onChange}
      fileList={fileList}
      accept={fileExtensionsString} // Specify accepted file types
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">UPLOAD LISTS & DRAWINGS</p>
      <p className="ant-upload-hint">
        Supported file types: {allowedExtensions.join(", ")} <br />
        Supports single or bulk upload. You can upload up to 10 files. Strictly prohibit from uploading company data or other banned files.
      </p>
    </Dragger>
  );
};

export default FileUpload;
