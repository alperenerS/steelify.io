import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Avatar, Card, Skeleton, Switch, Input, Form, Checkbox
} from 'antd';

const { Meta } = Card;
const App = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      <Switch checked={!loading} onChange={onChange} />
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          title="Shipping Adress"
        />
            <Form.Item label="Country">
            <Input />
            </Form.Item>      
            <Form.Item label="Street Adress">
            <Input />
            <Input />
            </Form.Item>
            <Form.Item label="City">
            <Input />
            </Form.Item> 
            <Form.Item label="Province">
            <Input />
            </Form.Item> 
            <Form.Item label="Zip Code">
            <Input />
            </Form.Item>
            <Form>
            <h3>Contact Information</h3>
            <Form.Item label="Phone Number">
            <Input />
            </Form.Item> 
            </Form>
            <Form.Item label="Email">
            <Input />
            </Form.Item>
        </Card>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
        />
      </Card>      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
        />
      </Card>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
            title="Card title"
          />
        </Skeleton>
      </Card>
      <Form.Item>
            <Checkbox><p>I have verified that my shipping information is correct.</p></Checkbox>
       </Form.Item>
    </>
  );
};
export default App;