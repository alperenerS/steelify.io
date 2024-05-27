const dummyData = [
  {
    orderId: 'E-891448-858112',
    orderName: 'Order 1',
    messages: [
      { sender: 'user1', message: 'Hello, how are you?' },
      { sender: 'user2', message: 'I am fine, thank you! How about you?' },
      { sender: 'user1', message: 'I am doing well, thank you!' },
      { sender: 'user2', message: 'Great to hear!' }
    ]
  },
  {
    orderId: 'E-892229-858826',
    orderName: 'Order 2',
    messages: [
      { sender: 'user1', message: 'Hi, when is the delivery?' },
      { sender: 'user2', message: 'It is scheduled for tomorrow.' },
      { sender: 'user1', message: 'Thanks for the update!' }
    ]
  }
];

export default dummyData;
