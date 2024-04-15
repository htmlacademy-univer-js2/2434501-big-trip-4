import { CITIES, DESCRIPTIONS } from '../const.js';
import { getRandomArrayElement } from '../utils.js';

function generateDestination() {
  const city = getRandomArrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: city,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${city} picture`
      }]
  };
}

export {generateDestination};
