const data = () => {
  const now = new Date();
  const dataObject = {
    rows: [
      {id: '1', name: 'name-1', value: Math.random()},
      {id: '2', name: 'name-2', value: Math.random()},
      {id: '3', name: 'name-3', value: Math.random()},
      {id: '4', name: 'name-4', value: Math.random()},
    ],
    timeStamp: now.getTime()
  };

  return JSON.stringify(dataObject);
};

export default data;
