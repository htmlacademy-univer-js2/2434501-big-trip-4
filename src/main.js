import Presenter from './presenter/presenter.js';

const pageBodyContainer = document.querySelector('.page-body');

const presenter = new Presenter({
  pageBodyContainer: pageBodyContainer
});

presenter.init();
