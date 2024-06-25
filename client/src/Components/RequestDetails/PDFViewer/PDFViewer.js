import React, { useState } from 'react';
import { Modal, Upload } from 'antd';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
import './PDFViewer.css';

GlobalWorkerOptions.workerSrc = pdfWorker;

// File name from url
const extractFileNameFromUrl = (url) => {
    return url.substring(url.lastIndexOf('/') + 1);
};

const PDFViewer = () => {
    const [open, setOpen] = useState(false);
    const defaultLayoutPluginInstance = defaultLayoutPlugin({    });

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const pdfUrl = 'https://yenastorage.blob.core.windows.net/steelify/YM20230003%20(3).pdf';
    const pdfFileName = extractFileNameFromUrl(pdfUrl);

    const pdfFileList = [
        {
            uid: '-1',
            name: pdfFileName,
            status: 'done',
            url: pdfUrl,
            thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
        },
        {
            uid: '-2',
            name: pdfFileName,
            status: 'done',
            url: pdfUrl,
            thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
        },
        {
            uid: '-3',
            name: pdfFileName,
            status: 'done',
            url: pdfUrl,
            thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
        },
    ];

    return (
        <div className="pdf-viewer-container">
            <Upload
                fileList={pdfFileList}
                listType="picture"
                showUploadList={{
                    showRemoveIcon: false,
                }}
                onPreview={showModal}
                beforeUpload={() => false}
            />
            <Modal
                title="PDF Viewer"
                open={open}
                onCancel={handleCancel}
                footer={null}
                width={800}
            >
                <div style={{ height: 'calc(100vh - 200px)' }}>
                    <Worker workerUrl={pdfWorker}>
                        <Viewer
                            fileUrl={pdfUrl}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </div>
            </Modal>
        </div>
    );
};

export default PDFViewer;