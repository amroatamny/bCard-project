const currentTime = () => {
  const now = new Date();
  const isoDate = `[${
    now.toLocaleTimeString() + " " + now.toLocaleDateString()
  }]`;
  return isoDate;
};
module.exports = currentTime;
