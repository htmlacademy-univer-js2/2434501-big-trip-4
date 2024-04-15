import ListFilterView from '../view/list-filter-view.js';
import ListSortView from '../view/list-sort-view.js';
import EventEditingFormView from '../view/event-editing-form.js';
import RoutePointView from '../view/route-point.js';
import { render } from '../render.js';
import DestinationsModel from '../model/destinations-model.js';

export default class Presenter {

  constructor({pageBodyContainer,
    destinationModel,
    offersModel,
    routePointsModel
  }) {
    this.pageBodyContainer = pageBodyContainer;
    this.listFilterContainer = this.pageBodyContainer.querySelector('.trip-controls__filters');
    this.eventsListContainer = this.pageBodyContainer.querySelector('.trip-events');

    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
    this.routePointsModel = routePointsModel;
  }

  init() {
    this.routePoints = [...this.routePointsModel.get()];

    render(new ListFilterView, this.listFilterContainer);

    render(new ListSortView, this.eventsListContainer);
    render(new EventEditingFormView, this.eventsListContainer);
    this.routePoints.forEach((point) => {
      render(
        new RoutePointView({
          point,
          pointDestination: new DestinationsModel().getById(),
          pointOffers: this.offersModel.getByType(point.type)
        }),
        this.eventsListContainer
      );
    });
    // for (let i = 0; i < this.routePoints.length; i++) {
    //   render(new RoutePointView({
    //     routePoint: this.routePoints[i],
    //     pointDestination: this.destinationModel.getById(this.routePoint.pointDestination),
    //     pointOffers: this.offersModel.getByType(routePoint.type)
    //   }), this.eventsListContainer);
    // }
  }
}
