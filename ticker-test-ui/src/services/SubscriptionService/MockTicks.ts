import uuid from 'uuid';

const tick = () => {
  const tickeUuid = uuid();
  const now = new Date();

  const dataObject = {
    id: tickeUuid,
    timeStamp: now.getTime()
  };

  return JSON.stringify(dataObject);
};

export default tick;
