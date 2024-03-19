import React from 'antd';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const FileUpload = ({ onFileListChange }) => {
  const onChange = (info) => {
      const newFiles = info.fileList.map(file => file.originFileObj ? file.originFileObj : file);
      onFileListChange(newFiles);
  };

    return (
        <Dragger
            name="file"
            multiple={true}
            beforeUpload={() => false} // Dosya yükleme işlemini engeller
            onChange={onChange}
        >
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Upload files here</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload.
            </p>
        </Dragger>
    );
};

export default FileUpload;
