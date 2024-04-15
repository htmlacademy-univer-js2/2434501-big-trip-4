import dayjs from 'dayjs';
import { INTEGERS } from './const';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let currentDate = dayjs().subtract(getRandomArrayElement(INTEGERS), 'day').toDate();

function generateDate({start}) {
  const randInt = Math.floor(Math.random() * 10);
  // пока что просто рандомное число от 0 до 10
  if (!start) {
    currentDate = dayjs(currentDate)
      .add(randInt, 'minute')
      .add(randInt, 'hour')
      .add(randInt, 'day')
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
  return dayjs(dateFrom).diff(dayjs(dateTo), 'minutes');
}

function getFavoriteTemplate(isFavorite) {
  let favoriteTemplate = '';

  if (isFavorite) {
    favoriteTemplate = 'event__favorite-btn--active';
  }

  return favoriteTemplate;
}

export {getRandomArrayElement, generateDate,
  formatStringToDateTime, formatStringToShortDate,
  formatStringToTime, getDuration, randomIntFromInterval, getFavoriteTemplate};
