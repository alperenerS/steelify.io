import React, { useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const FileUpload = ({ onFileListChange }) => {
  const [fileList, setFileList] = useState([]);
  const maxTotalSize = 100 * 1024 * 1024; // 100 MB maximum total size

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

    const currentTotalSize = fileList.reduce((total, item) => total + item.size, 0);
    const newTotalSize = currentTotalSize + file.size;
    if (newTotalSize > maxTotalSize) {
      message.error("Cannot upload this file: total size would exceed 100 MB.");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const onChange = (info) => {
    if (info.fileList.length > 10) {
      message.error(`You can upload up to 10 files. You have tried to upload ${info.fileList.length}. Please remove excess files.`);
      info.fileList = info.fileList.slice(0, 10);
    }

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
      accept={fileExtensionsString}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">UPLOAD LISTS & DRAWINGS</p>
      <p className="ant-upload-hint">
        Supported file types: {allowedExtensions.join(", ")} <br />
        Supports single or bulk upload. You can upload up to 10 files. Strictly prohibit from uploading company data or other banned files. Maximum total file size is 100 MB.
      </p>
    </Dragger>
  );
};

export default FileUpload;
