const toSeconds = (duration) => {
  const [hours, minutes, seconds] = duration.split(':');
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
};

const toHours = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = duration % 3600 % 60;
  return `${hours}:${minutes}:${seconds}`;
};

module.exports = {
  toSeconds,
  toHours
}
