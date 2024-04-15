import { generateDate, getRandomArrayElement } from '../utils';
import { ROUTE_POINT_TYPES, PRICES, BOOLEANS } from '../const';
import { generateDestination } from './destination';
import { generateOffer } from './offer';

function generateRoutePoint() {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomArrayElement(PRICES),
    dateFrom: generateDate({start: true}),
    dateTo: generateDate({start: false}),
    destination: generateDestination(),
    isFavorite: getRandomArrayElement(BOOLEANS),
    offers: generateOffer(this.type),
    type: getRandomArrayElement(ROUTE_POINT_TYPES)
  };
}

// const mockRoutePoints = [
//   {
//     type: getRandomArrayElement(ROUTE_POINT_TYPES),
//     destination: generateDestination(),
//     offers: '',
//     startDate: '',
//     startTime: '',
//     endDate: '',
//     endTime: '',
//     price: getRandomArrayElement(PRICES)
//   }
// ];

// function getRandomRoutePoint() {
//   return getRandomArrayElement(mockRoutePoints);
// }

export {generateRoutePoint};
