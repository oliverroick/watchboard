const { toSeconds, toHours } = require("./duration");

const toDate = (dateStr) => new Date(dateStr.replace(' ', 'T'));

const updateResults = (resultObj, key, duration) => {
  const value = resultObj.hasOwnProperty(key)
    ? toHours(toSeconds(resultObj[key]) + toSeconds(duration))
    : duration;

  return {...resultObj, [key]: value}
}

const byYear = (records) => records.reduce((resultObj, record) => {
  const year = toDate(record.startTime).getFullYear();
  return updateResults(resultObj, year, record.duration);
}, {});

const byWeekday = (records) => records.reduce(
  (resultObj, record) => updateResults(resultObj, toDate(record.startTime).getDay(), record.duration),
  {}
);

const byMonth = (records) => records.reduce(
  (resultObj, record) => updateResults(resultObj, toDate(record.startTime).getMonth(), record.duration),
  {}
);

const byDay = (records) => records.reduce(
  (resultObj, record) => updateResults(resultObj, record.startTime.split(' ')[0], record.duration),
  {}
);

module.exports = {
  byYear,
  byMonth,
  byWeekday,
  byDay,
};
