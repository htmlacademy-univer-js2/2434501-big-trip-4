import { generateRoutePoint } from '../mock/route-point';

const ROUTE_POINTS_COUNT = 3;

export default class RoutePointsModel {
  routePoints = Array.from({length: ROUTE_POINTS_COUNT}, generateRoutePoint());

  getRoutePoints() {
    return this.routePoints;
  }
}
