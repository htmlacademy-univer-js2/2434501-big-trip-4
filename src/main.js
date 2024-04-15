import Presenter from './presenter/presenter.js';
import RoutePointsModelModel from './model/route-points-model.js';
import MockService from './service/service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const pageBodyContainer = document.querySelector('.page-body');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const routePointsModel = new RoutePointsModelModel(mockService);

const presenter = new Presenter({
  pageBodyContainer: pageBodyContainer,
  destinationsModel,
  offersModel,
  routePointsModel
});

presenter.init();
