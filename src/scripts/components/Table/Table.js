import Component from "../Component";

class Table extends Component {
  constructor({ parentSelector, currentDate, departmentTeams, className }) {
    super({ parentSelector, tagName: "table", className });
    this.currentDate = currentDate;
    this.departmentTeams = departmentTeams;

    this.thead = new CalendarHead({
      parentSelector: this.component,
      tagName: "thead",
      currentDate: currentDate,
      className: "calendar-table__head",
    });
    this.thead.render();

    this.tbody = new CalendarBody({
      parentSelector: this.component,
      tagName: "thead",
      currentDate: currentDate,
      departmentTeams: this.departmentTeams,
      className: "calendar-table__body",
    });
    this.tbody.render();
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
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

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

class CalendarBody extends Component {
  constructor({ parentSelector, currentDate, departmentTeams, className }) {
    super({ parentSelector, tagName: "tbody", className });
    this.renderBody(currentDate, departmentTeams);
  }

  renderBody(currentDate, departmentTeams) {
    for (let i = 0; i < departmentTeams.teams.length; i++) {
      const numberOfMembers = departmentTeams.teams[i].members.length;
      let teamNum = (i + 1) % 4;

      if (teamNum === 0) {
        teamNum = 4;
      }

      for (let j = 0; j < numberOfMembers + 1; j++) {
        const firstDayInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        let activeDay = firstDayInMonth;

        this.bodyRow = new CalendarRow({
          parentSelector: this.component,
          className: "calendar-table__body-row",
        });

        if (j === 0) {
          this.bodyRow.addClass("team-first-row");
        }

        if (j === numberOfMembers) {
          this.bodyRow.addClass("team-last-row");
        }

        this.bodyRow.addClass(`teamColor${teamNum}`);

        this.bodyRow.render();

        this.bodyCell = new CalendarСell({
          parentSelector: this.bodyRow.returnComponent(),
          tagName: "td",
          className: ["calendar-table__body-first-column", "first-column"],
        });

        if (j === 0) {
          this.bodyCell.addContent(`<div class="team-info-cell"><span class="team-info-cell__team-name">${
            departmentTeams.teams[i].name
          }</span>
        <div class="team-info-cell__wrapper">
										<div class="team-info-cell__number-people">${departmentTeams.teams[i].members.length}</div>
										<div class="team-info-cell__percent">${departmentTeams.teams[i].percentageOfAbsent[currentDate.getMonth()]}%</div>
                    <div class="team-info-cell__collapse"></div></div></div>`);
        } else {
          this.bodyCell.addContent(departmentTeams.teams[i].members[j - 1].name);
        }

        this.bodyCell.render();

        for (let k = 1; k <= daysInMonth + 1; k++) {
          this.bodyCell = new CalendarСell({
            parentSelector: this.bodyRow.returnComponent(),
            tagName: "td",
            className: ["calendar-table__body-column"],
          });

          if (k === daysInMonth + 1) {
            this.bodyCell.addClass("sum-cell");
          }

          if (activeDay % 7 == 0 || activeDay % 7 == 6) {
            this.bodyCell.addClass("weekend");
          }

          this.bodyCell.render();
          activeDay++;
        }
      }
    }
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
