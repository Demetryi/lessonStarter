import { Component } from "../Component";
import { Table } from "../Table";
import { INavigationProperties } from "../types";

export class Navigation extends Component {
  date: Date;
  tableComponent: Table;
  previousButton: Element;
  monthLabel: Element;
  nextButton: Element;
  constructor({ parent, date, tableComponent, classNames }: INavigationProperties) {
    super({ parent, classNames });
    this.tableComponent = tableComponent;
    this.date = date;
    const { previousButton, monthLabel, nextButton } = this.addNavigationContent();
    this.previousButton = previousButton.render();
    this.monthLabel = monthLabel.render();
    this.nextButton = nextButton.render();
    this.previousButton.addEventListener("click", () => this.setPreviousMonth());
    this.nextButton.addEventListener("click", () => this.setNextMonth());
  }

  changeDate(newDate: Date): void {
    this.date = newDate;
    this.updateMonth(this.date);
    this.tableComponent.updateTable(this.date);
  }

  setPreviousMonth(): void {
    this.changeDate(new Date(this.date.getFullYear(), this.date.getMonth(), 0));
  }

  setNextMonth(): void {
    this.changeDate(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1));
  }

  updateMonth(newDate: Date): void {
    this.monthLabel.textContent = newDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }

  addNavigationContent(): { previousButton: Component; monthLabel: Component; nextButton: Component } {
    const previousButton = new Component({
      parent: this.component,
      tagName: "button",
      classNames: ["calendarBar__nav", "prevMonth"],
    });
    previousButton.addContent(
      new Component({ parent: previousButton.component, tagName: "i", classNames: ["fas", "fa-arrow-left"] }).render(),
    );
    const monthLabel = new Component({
      parent: this.component,
      tagName: "p",
      classNames: "calendarBar__current",
      content: this.date.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    });
    const nextButton = new Component({
      parent: this.component,
      tagName: "button",
      classNames: ["calendarBar__nav", "nextMonth"],
    });
    nextButton.addContent(
      new Component({ parent: nextButton.component, tagName: "i", classNames: ["fas", "fa-arrow-right"] }).render(),
    );
    return { previousButton, monthLabel, nextButton };
  }
}
