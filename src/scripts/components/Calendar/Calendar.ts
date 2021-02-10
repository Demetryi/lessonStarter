import { Component } from "../Component";
import { Navigation } from "../Navigation";
import { Table } from "../Table";
import { IComponentProperties } from "../types";

export class Calendar extends Component {
  currentDate: Date;
  table: Table;
  nav: Navigation;
  constructor({ parent, classNames }: IComponentProperties) {
    super({ parent, classNames });
    this.currentDate = new Date();
    this.table = new Table({ parent: this.component, date: this.currentDate });
    this.nav = new Navigation({
      parent: this.component,
      date: this.currentDate,
      tableComponent: this.table,
      classNames: "calendarBar",
    });
    this.render();
  }

  render(): Element {
    super.render();
    this.nav.render();
    this.table.render();
    return this.component;
  }
}
