import React from "react";
import { List, Card } from "antd";

const QualityDocumentsPanel = () => {
  const photos = [
    {
      name: 'Quality Document 1',
      url: 'https://yenastorage.blob.core.windows.net/steelify/Steelify - QualityDocuments - 001.png',
      date: '2024-04-01'
    },
    {
      name: 'Quality Document 2',
      url: 'https://yenastorage.blob.core.windows.net/steelify/Steelify - QualityDocuments - 002.jpeg',
      date: '2024-04-13'
    }
  ];

  return (
    <>
      <p>Please review the quality documents below.</p>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={photos}
        renderItem={(photo) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={photo.name} src={photo.url} style={{ height: 'auto', maxWidth: '100%', display: 'block' }} />}
            >
              <Card.Meta title={photo.name} description={`Uploaded on: ${photo.date}`} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default QualityDocumentsPanel;
