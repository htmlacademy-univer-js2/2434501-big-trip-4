import ListFilterView from '../view/list-filter-view.js';
import ListSortView from '../view/list-sort-view.js';
import EventEditingFormView from '../view/event-editing-form.js';
import RoutePointView from '../view/route-point.js';
import { render } from '../render.js';

export default class Presenter {

  constructor({pageBodyContainer, routePointsModel}) {
    this.pageBodyContainer = pageBodyContainer;
    this.listFilterContainer = this.pageBodyContainer.querySelector('.trip-controls__filters');
    this.eventsListContainer = this.pageBodyContainer.querySelector('.trip-events');

    this.routePointsModel = routePointsModel;
  }

  init() {
    this.routePoints = [...this.routePointsModel.getRoutePoints()];

    render(new ListFilterView, this.listFilterContainer);

    render(new ListSortView, this.eventsListContainer);
    render(new EventEditingFormView, this.eventsListContainer);
    for (let i = 0; i < this.routePoints.length; i++) {
      render(new RoutePointView({routePoint: this.routePoints[i]}), this.eventsListContainer);
    }
  }
}
