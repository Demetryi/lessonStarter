import Component from "../Component";

class Table extends Component {
  constructor({ parentSelector, currentDate, className }) {
    super({ parentSelector, tagName: "table", className });
    this.currentDate = currentDate;

    this.thead = new CalendarHead({
      parentSelector: this.component,
      tagName: "thead",
      currentDate: currentDate,
      className: "calendar-table__head",
    });
    this.thead.render();
  }
  render() {
    super.render();
  }
}

class CalendarHead extends Component {
  constructor({ parentSelector, currentDate, className }) {
    super({ parentSelector, tagName: "thead", className });

    this.renderHead(currentDate);
  }

  renderHead(currentDate) {
    this.headRow = new CalendarRow({
      parentSelector: this.component,
      className: "calendar-table__head-row",
    }).render();

    this.btnCell = new CalendarСell({
      parentSelector: this.headRow,
      tagName: "th",
      className: ["calendar-table__head-column", "calendar-table__head-column--btn-cell"],
    }).render();

    this.addVacationButton = new Component({
      parentSelector: this.btnCell,
      tagName: "button",
      className: "calendar-table__add-vacation-button",
    });
    this.addVacationButton.addContent("Add Vacation");
    this.addVacationButton.render();

    const firstDayInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    console.log;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    console.log(daysInMonth);

    let activeDay = firstDayInMonth;

    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarCell = new CalendarСell({
        parentSelector: this.headRow,
        tagName: "th",
        className: ["calendar-table__head-column"],
      });

      if (activeDay % 7 == 0 || activeDay % 7 == 6) {
        this.calendarCell.addClass(["weekend"]);
      }

      this.calendarCell.addContent(
        `<span class="calendar-table__head-week-day">${new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          i,
        ).toLocaleDateString("en-US", {
          weekday: "short",
        })}</span><span class="calendar-table__month-day">${i}</span>`,
      );
      this.calendarCell.render();
      activeDay++;
    }

    this.sumCell = new CalendarСell({
      parentSelector: this.headRow,
      tagName: "th",
      className: ["calendar-table__head-column", "calendar-table__head-column--sum-cell"],
    });
    this.sumCell.addContent("Sum");
    this.sumCell.render();
  }
}

class CalendarRow extends Component {
  constructor({ parentSelector, className }) {
    super({ parentSelector, tagName: "tr", className });
  }
}

class CalendarСell extends Component {
  constructor({ parentSelector, tagName, className }) {
    super({ parentSelector, tagName, className });
  }
}

export { Table };
