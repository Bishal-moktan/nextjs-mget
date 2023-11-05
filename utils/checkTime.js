export const checkTime = () => {
  const day = new Date().getDay();
  const time = new Date().getHours();
  if (day === 0) {
    return false;
  } else {
    if (time >= 9 && time <= 17) {
      return true;
    } else {
      return false;
    }
  }
};
