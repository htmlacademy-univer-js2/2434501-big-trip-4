// import { generateRoutePoint } from '../mock/route-point';

// const ROUTE_POINTS_COUNT = 3;

export default class RoutePointsModel {
  constructor({service}) {
    this.service = service;
    this.points = this.service.getPoints();
  }

  get() {
    return this.points;
  }
  // routePoints = Array.from({length: ROUTE_POINTS_COUNT}, generateRoutePoint());

  // getRoutePoints() {
  //   return this.routePoints;
  // }
}
