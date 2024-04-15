import Presenter from './presenter/presenter.js';
import RoutePointsModelModel from './model/route-points-model.js';
import MockService from './service/service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const pageBodyContainer = document.querySelector('.page-body');

const service = new MockService();
const destinationsModel = new DestinationsModel({service});
const offersModel = new OffersModel({service});
const routePointsModel = new RoutePointsModelModel({service});

const presenter = new Presenter({
  pageBodyContainer,
  destinationsModel,
  offersModel,
  routePointsModel
});

presenter.init();
