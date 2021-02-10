import Component from "../Component";
import Navigation from "../Navigation";
import VacationRequest from "../VacationRequest";
import { Table } from "../Table";

export default class Calendar extends Component {
  constructor({ parentSelector, departmentTeams, className }) {
    super({ parentSelector, className });
    this.departmentTeams = departmentTeams;
    this.currentDate = new Date();

    this.table = new Table({
      parentSelector: this.component,
      currentDate: this.currentDate,
      departmentTeams: this.departmentTeams,
      className: "calendar-table",
    }); // отдельный класс
    this.nav = new Navigation({
      parentSelector: this.component,
      date: this.currentDate,
      tableComponent: this.table,
      className: "calendar-bar",
    }); // отдельный класс
    this.vacation = new VacationRequest({
      parentSelector: parentSelector,
      date: this.currentDate,
      tableComponent: this.table,
      className: "modal",
    }); // отдельный класс
  }

  addClass(elementClass) {
    super.addClass(elementClass);
  }

  render() {
    super.render();
    this.nav.render();
    this.table.render();
    this.vacation.render();
  }
}
