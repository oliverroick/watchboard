#!/usr/bin/env node
const fs = require('fs');
const parseCsv = require('csv-parser');
const { byYear, byWeekday, byMonth, byDay } = require('./crunching');

const [profile, input, out] = process.argv.slice(2)
const results = [];

fs.createReadStream(input)
  .pipe(parseCsv())
  .on('data', (record) => {
    if (record['Profile Name'] === profile) {
      results.push({
        startTime: record['Start Time'],
        duration: record['Duration'],
      })
    }
  })
  .on('end', () => {
    console.log(byYear(results));
    console.log(byMonth(results));
    console.log(byWeekday(results));
    console.log(byDay(results));
  });
