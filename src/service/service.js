import { BOOLEANS, DESTINATIONS_COUNT, OFFERS_COUNT, POINTS_COUNT, ROUTE_POINT_TYPES } from '../const.js';
import { generateDestination } from '../mock/destination.js';
import { generateOffer } from '../mock/offer.js';
import { generateRoutePoint } from '../mock/route-point.js';
import { getRandomArrayElement } from '../utils.js';

export default class MockService {
  destinations = [];
  offers = [];
  points = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

  generateDestinations() {
    return Array.from(
      {length: DESTINATIONS_COUNT},
      () => generateDestination()
    );
  }

  generateOffers() {
    return ROUTE_POINT_TYPES.map((type) => ({
      type,
      // добавить рандомное количество офферов
      offers: Array.from({length: OFFERS_COUNT}, () => generateOffer(type))
    }));
  }

  generatePoints() {
    return Array.from({length: POINTS_COUNT}, () => {
      const type = getRandomArrayElement(ROUTE_POINT_TYPES);
      const destination = getRandomArrayElement(this.destinations);

      const hasOffers = getRandomArrayElement(BOOLEANS);

      const offersByType = this.offers
        .find((offerByType) => offerByType.type === type);

      const offerIds = (hasOffers)
        ? offersByType.offers
          // добавить рандномное кол-во офферов
          .slice(0, OFFERS_COUNT)
          .map((offer) => offer.id)
        : [];

      return generateRoutePoint(type, destination.id, offerIds);
    });
  }
}
