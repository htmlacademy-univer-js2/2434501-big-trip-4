import { PRICES } from '../const';
import { getRandomArrayElement } from '../utils';

function generateOffer(routePointType) {
  return {
    id: crypto.randomUUID(),
    title: `Offer for ${routePointType}`,
    price: getRandomArrayElement(PRICES)
  };
}

export {generateOffer};
