import { PRICES } from '../const.js';
import { getRandomArrayElement } from '../utils.js';

function generateOffer(routePointType) {
  return {
    id: crypto.randomUUID(),
    title: `Offer for ${routePointType}`,
    price: getRandomArrayElement(PRICES)
  };
}

export {generateOffer};
