import ListFilterView from './view/list-filter-view.js';
import ListSortView from './view/list-sort-view.js';
import EventEditingFormView from './view/event-editing-form.js';
import RoutePointView from './view/route-point.js';
import { render } from './render.js';

const listFilterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');


render(new ListFilterView(), listFilterContainer);
render(new ListSortView(), eventsContainer);
render(new EventEditingFormView(), eventsContainer);
render(new RoutePointView(), eventsContainer);
render(new RoutePointView(), eventsContainer);
render(new RoutePointView(), eventsContainer);
