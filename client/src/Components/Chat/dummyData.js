const dummyData = [
  {
    orderId: 'E-891448-858112',
    orderName: 'Order 1',
    messages: [
      { sender: 'user1', message: 'Hello, how are you?', timestamp: '2024-05-28T14:00:00.000Z' },
      { sender: 'user2', message: 'I am fine, thank you! How about you?', timestamp: '2024-05-28T14:03:00.000Z' },
      { sender: 'user1', message: 'I am doing well, thank you!', timestamp: '2024-05-28T14:08:00.000Z' },
      { sender: 'user2', message: 'Great to hear!', timestamp: '2024-05-28T14:12:00.000Z' }
    ]
  },
  {
    orderId: 'E-892229-858826',
    orderName: 'Order 2',
    messages: [
      { sender: 'user1', message: 'Hi, when is the delivery?', timestamp: '2024-05-28T15:00:00.000Z' },
      { sender: 'user1', message: 'Hi, when is the delivery?', timestamp: '2024-05-28T15:00:00.000Z' },
      { sender: 'user2', message: 'It is scheduled for tomorrow.', timestamp: '2024-05-28T15:01:00.000Z' },
      { sender: 'user1', message: 'Thanks for the update!', timestamp: '2024-05-28T15:00:00.000Z' }
    ]
  }
];

export default dummyData;
