import React from 'react';
import { Image } from 'antd';

const TransfersPanel = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        width={800}
        src="https://yenastorage.blob.core.windows.net/steelify/Steelify - Transfer.png"
        alt="Transfer Image"
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
};

export default TransfersPanel;
