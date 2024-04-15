import { generateDate, getRandomArrayElement } from '../utils';
import { PRICES, BOOLEANS } from '../const';
// import { generateDestination } from './destination';
// import { generateOffer } from './offer';

function generateRoutePoint(routePointType, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomArrayElement(PRICES),
    dateFrom: generateDate({start: true}),
    dateTo: generateDate({start: false}),
    destination: destinationId,
    isFavorite: getRandomArrayElement(BOOLEANS),
    offers: offerIds,
    type: routePointType
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
