import SortView from '../view/sort-view';
import EventListView from '../view/event-list-view';
import EventView from '../view/event-view';
import EventAddView from '../view/event-add-view';
import EventEditView from '../view/event-edit-view';
import {render} from '../render';

export default class BoardPresenter {
  eventListComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    const EVENT_COUNT = 3;

    render(new SortView(), this.boardContainer);
    render(this.eventListComponent, this.boardContainer);
    render(new EventEditView(), this.eventListComponent.getElement());
    render(new EventAddView(), this.eventListComponent.getElement());

    for (let i = 0; i < EVENT_COUNT; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
  }
}
