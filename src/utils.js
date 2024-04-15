import dayjs from 'dayjs';
import { INTEGERS } from './const';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

let currentDate = dayjs().subtract(getRandomArrayElement(INTEGERS), 'day').toDate();

function generateDate({start}) {
  if (!start) {
    currentDate = dayjs(currentDate).subtract(getRandomArrayElement(INTEGERS), 'day')
      .subtract(getRandomArrayElement(INTEGERS), 'hour')
      .toDate();
  }
  return currentDate;
}

function formatStringToDateTime(date) {
  return dayjs(date).format('YYYY-MM-DDHH:mm');
}

function formatStringToShortDate(date) {
  return dayjs(date).format('MMM DD');
}

function formatStringToTime(date) {
  return dayjs(date).format('HH:mm');
}

function getDuration(dateFrom, dateTo) {
  return dateFrom.diff(dateTo, 'minutes');
}

export {getRandomArrayElement, generateDate,
  formatStringToDateTime, formatStringToShortDate,
  formatStringToTime, getDuration};
