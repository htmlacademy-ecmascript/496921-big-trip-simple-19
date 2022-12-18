import FilterView from './view/filter-view';
import BoardPresenter from './presenter/board-presenter';
import {render} from './render';

const siteFiltersContainer = document.querySelector('.trip-controls__filters');
const siteBoardContainer = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({boardContainer: siteBoardContainer});

render(new FilterView(), siteFiltersContainer);

boardPresenter.init();
