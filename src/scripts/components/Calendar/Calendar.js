import Component from "../Component";
import Navigation from "../Navigation";
import { Table } from "../Table";

export default class Calendar extends Component {
  constructor({ parentSelector, className }) {
    super({ parentSelector, className });
    this.currentDate = new Date();

    this.table = new Table({
      parentSelector: this.component,
      currentDate: this.currentDate,
      className: "calendar-table",
    }); // отдельный класс
    this.nav = new Navigation({
      parentSelector: this.component,
      date: this.currentDate,
      tableComponent: this.table,
      className: "calendar-bar",
    }); // отдельный класс
  }

  addClass(elementClass) {
    super.addClass(elementClass);
  }

  render() {
    super.render();
    this.nav.render();
    this.table.render();
  }
}
