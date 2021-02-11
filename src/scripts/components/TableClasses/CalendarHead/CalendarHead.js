import Component from "../../Component";
import CalendarRow from "../CalendarRow";
import CalendarСell from "../CalendarCell";
import CalendarHeadСell from "../CalendarHeadCell";

const MAX_MONTH_DAY = 31;

export default class CalendarHead extends Component {
  constructor({ parentSelector, currentDate, className }) {
    super({ parentSelector, tagName: "thead", className });
    this.dateCells = [];

    this.renderEmptyHead();
    this.renderHead(currentDate);
  }

  renderEmptyHead() {
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

    for (let dayCounter = 1; dayCounter <= MAX_MONTH_DAY; dayCounter++) {
      this.calendarHeadCell = new CalendarHeadСell({
        parentSelector: this.headRow,
        tagName: "th",
        className: ["calendar-table__head-column"],
      });

      this.weekDay = new Component({
        parentSelector: this.calendarHeadCell.returnComponent(),
        tagName: "span",
        className: "calendar-table__head-week-day",
      });

      this.monthDay = new Component({
        parentSelector: this.calendarHeadCell.returnComponent(),
        tagName: "span",
        className: "calendar-table__month-day",
      });

      this.calendarHeadCell.addDate(this.weekDay, this.monthDay);
      this.weekDay.render();
      this.monthDay.render();
      this.calendarHeadCell.render();

      this.dateCells.push(this.calendarHeadCell);
    }

    this.sumCell = new CalendarСell({
      parentSelector: this.headRow,
      tagName: "th",
      className: ["calendar-table__head-column", "calendar-table__head-column--sum-cell"],
    });
    this.sumCell.addContent("Sum");
    this.sumCell.render();
  }

  hideDateCells() {
    for (let cellCounter = 0; cellCounter < this.dateCells.length; cellCounter++) {
      this.dateCells[cellCounter].addClass("hide");
      this.dateCells[cellCounter].removeClass("weekend");
    }
  }

  renderHead(currentDate) {
    this.hideDateCells();

    const firstDayInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    let activeDay = firstDayInMonth;

    for (let dayCounter = 0; dayCounter < daysInMonth; dayCounter++) {
      this.dateCells[dayCounter].removeClass("hide");

      if (activeDay % 7 === 0 || activeDay % 7 === 6) {
        this.dateCells[dayCounter].addClass("weekend");
      }

      this.dateCells[dayCounter].weekDay.addContent(
        `${new Date(currentDate.getFullYear(), currentDate.getMonth(), dayCounter + 1).toLocaleDateString("en-US", {
          weekday: "short",
        })}`,
      );
      this.dateCells[dayCounter].monthDay.addContent(`${dayCounter + 1}`);

      activeDay += 1;
    }
  }
}
