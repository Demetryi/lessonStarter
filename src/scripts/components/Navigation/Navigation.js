import Component from "../Component";

export class Navigation extends Component {
  constructor(parentSelector, date, tableComponent) {
    super(parentSelector);
    this.tableComponent = tableComponent;
    this.date = date;
    this.component.innerHTML = `<button class="calendar-bar__control-button
                                               calendar-bar__control-button--prev">
                                </button>
                                <h2 class="calendar-bar__header">
                                ${this.date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                </h2>
                                <button class="calendar-bar__control-button
                                               calendar-bar__control-button--next">
                                </button>`;
    this.component
      .querySelector(".calendar-bar__control-button--prev")
      .addEventListener("click", this.prevMonth.bind(this));

    this.component
      .querySelector(".calendar-bar__control-button--next")
      .addEventListener("click", this.nextMonth.bind(this));

    this.component.classList.add("calendar-bar");
  }

  prevMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1);
    this.updateMonth(this.date);
    this.tableComponent.updateTableHead(this.date);
  }

  nextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1);
    this.updateMonth(this.date);
    this.tableComponent.updateTableHead(this.date);
  }

  updateMonth(newDate) {
    this.component.querySelector(".calendar-bar__header").textContent = newDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  render() {
    super.render();
  }
}
