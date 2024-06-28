const currentTime = () => {
  const now = new Date();
  const isoDate = `[${
    now.toLocaleTimeString() + " " + now.toLocaleDateString()
  }]`;
  return isoDate;
};

const currentDateMorgan = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${day}.${month}.${year}`;
};
exports.currentTime = currentTime;
exports.currentDateMorgan = currentDateMorgan;
