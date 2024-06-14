import React from "react";
import { List, Card } from "antd";

const QualityDocumentsPanel = ({ qualityDocuments }) => {
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
        dataSource={qualityDocuments}
        renderItem={(document) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={document.name} src={document.url} style={{ height: 'auto', maxWidth: '100%', display: 'block' }} />}
            >
              <Card.Meta title={document.name} description={`Uploaded on: ${document.date}`} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default QualityDocumentsPanel;
