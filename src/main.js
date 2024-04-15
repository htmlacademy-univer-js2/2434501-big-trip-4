import Presenter from './presenter/presenter.js';
import RoutePointsModelModel from './model/route-points-model.js';

const pageBodyContainer = document.querySelector('.page-body');

const routePointsModel = new RoutePointsModelModel;

const presenter = new Presenter({
  pageBodyContainer: pageBodyContainer,
  routePointsModel
});

presenter.init();
