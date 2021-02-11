import Component from "../Component";
const MAX_MONTH_DAY = 31;

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

      if (activeDay % 7 == 0 || activeDay % 7 == 6) {
        this.dateCells[dayCounter].addClass("weekend");
      }

      this.dateCells[dayCounter].weekDay.addContent(
        `${new Date(currentDate.getFullYear(), currentDate.getMonth(), dayCounter + 1).toLocaleDateString("en-US", {
          weekday: "short",
        })}`,
      );
      this.dateCells[dayCounter].monthDay.addContent(`${dayCounter + 1}`);

      activeDay++;
    }
  }
}

class CalendarBody extends Component {
  constructor({ parentSelector, currentDate, departmentTeams, className }) {
    super({ parentSelector, tagName: "tbody", className });
    this.arrayCells = [];

    this.renderEmptyBody(departmentTeams);
    this.renderBody(currentDate, departmentTeams);
  }

  renderEmptyBody(departmentTeams) {
    this.arrayTeams = [];
    for (let comandCounter = 0; comandCounter < departmentTeams.teams.length; comandCounter++) {
      this.numberOfMembers = departmentTeams.teams[comandCounter].members.length;
      this.teamNum = (comandCounter + 1) % 4;

      if (this.teamNum === 0) {
        this.teamNum = 4;
      }
      this.arrayTeamRow = [];

      for (let memberCounter = 0; memberCounter < this.numberOfMembers + 1; memberCounter++) {
        this.bodyRow = new CalendarRow({
          parentSelector: this.component,
          className: ["calendar-table__body-row", `teamColor${this.teamNum}`],
        });

        if (memberCounter === 0) {
          this.bodyRow.addClass("team-first-row");

          this.teamCell = new TeamNameCell({
            parentSelector: this.bodyRow.returnComponent(),
            tagName: "td",
            className: ["calendar-table__body-first-column", "first-column"],
          });
          this.teamCell.render();
          this.bodyRow.addTeamInfoCell(this.teamCell);
        } else {
          this.bodyRow.addClass("team" + (comandCounter + 1));

          this.firstBodyCell = new CalendarСell({
            parentSelector: this.bodyRow.returnComponent(),
            tagName: "td",
            className: ["calendar-table__body-first-column", "first-column"],
          });
          this.firstBodyCell.render();
          this.bodyRow.addNameCell(this.firstBodyCell);
        }

        if (memberCounter === this.numberOfMembers) {
          this.bodyRow.addClass("team-last-row");
        }

        this.bodyRow.render();
        this.arrayTeamRow.push(this.bodyRow);
      }
      this.arrayTeams.push(this.arrayTeamRow);
    }

    for (let teamCounter = 0; teamCounter < this.arrayTeams.length; teamCounter++) {
      for (let teamRowCounter = 0; teamRowCounter < this.arrayTeams[teamCounter].length; teamRowCounter++) {
        this.arrayCells = [];

        for (let dayCounter = 1; dayCounter <= 31; dayCounter++) {
          this.bodyCell = new CalendarСell({
            parentSelector: this.arrayTeams[teamCounter][teamRowCounter].returnComponent(),
            tagName: "td",
            className: ["calendar-table__body-column"],
          });
          this.bodyCell.render();
          this.arrayCells.push(this.bodyCell);
        }
        this.bodySumCell = new CalendarСell({
          parentSelector: this.arrayTeams[teamCounter][teamRowCounter].returnComponent(),
          tagName: "td",
          className: ["calendar-table__body-column", "sum-cell"],
        });
        this.bodySumCell.render();
        this.arrayTeams[teamCounter][teamRowCounter].addCells(this.arrayCells);
      }
    }
  }

  hideCells() {
    for (let teamCounter = 0; teamCounter < this.arrayTeams.length; teamCounter++) {
      for (let teamRowCounter = 0; teamRowCounter < this.arrayTeams[teamCounter].length; teamRowCounter++) {
        for (
          let dayCounter = 0;
          dayCounter < this.arrayTeams[teamCounter][teamRowCounter].rowCells.length;
          dayCounter++
        ) {
          this.arrayTeams[teamCounter][teamRowCounter].rowCells[dayCounter].addClass("hide");
          this.arrayTeams[teamCounter][teamRowCounter].rowCells[dayCounter].removeClass("weekend");
        }
      }
    }
  }

  renderBody(currentDate, departmentTeams) {
    this.hideCells();

    const firstDayInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let teamCounter = 0; teamCounter < this.arrayTeams.length; teamCounter++) {
      for (let teamRowCounter = 0; teamRowCounter < this.arrayTeams[teamCounter].length; teamRowCounter++) {
        if (teamRowCounter === 0) {
          this.arrayTeams[teamCounter][teamRowCounter].teamInfoCell.teamName.addContent(
            `${departmentTeams.teams[teamCounter].name}`,
          );

          this.arrayTeams[teamCounter][teamRowCounter].teamInfoCell.teamPeopleNumber.addContent(
            `${departmentTeams.teams[teamCounter].members.length}`,
          );

          this.arrayTeams[teamCounter][teamRowCounter].teamInfoCell.teamPercent.addContent(
            `${departmentTeams.teams[teamCounter].percentageOfAbsent[currentDate.getMonth()]}` + "%",
          );
        } else {
          this.arrayTeams[teamCounter][teamRowCounter].nameCell.addContent(
            departmentTeams.teams[teamCounter].members[teamRowCounter - 1].name,
          );
        }

        let activeDay = firstDayInMonth;
        for (let dayCounter = 0; dayCounter < daysInMonth; dayCounter++) {
          this.arrayTeams[teamCounter][teamRowCounter].rowCells[dayCounter].removeClass("hide");

          if (activeDay % 7 == 6 || activeDay % 7 == 0) {
            this.arrayTeams[teamCounter][teamRowCounter].rowCells[dayCounter].addClass("weekend");
          }
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

  addCells(cellArray) {
    this.rowCells = cellArray;
  }

  addNameCell(nameCell) {
    this.nameCell = nameCell;
  }

  addTeamInfoCell(teamInfoCell) {
    this.teamInfoCell = teamInfoCell;
  }
}

class CalendarСell extends Component {
  constructor({ parentSelector, tagName, className }) {
    super({ parentSelector, tagName, className });
  }
}

class CalendarHeadСell extends CalendarСell {
  constructor({ parentSelector, tagName, className }) {
    super({ parentSelector, tagName, className });
  }

  addDate(weekDay, monthDay) {
    this.weekDay = weekDay;
    this.monthDay = monthDay;
  }
}

class TeamNameCell extends CalendarСell {
  constructor({ parentSelector, tagName, className }) {
    super({ parentSelector, tagName, className });

    this.teamInfoCell = new Component({ parentSelector: this.component, tagName: "div", className: "team-info-cell" });
    this.teamInfoCell.render();

    this.teamName = new Component({
      parentSelector: this.teamInfoCell.returnComponent(),
      tagName: "span",
      className: "team-info-cell__team-name",
    });
    this.teamName.render();

    this.teamNameCellWrapper = new Component({
      parentSelector: this.teamInfoCell.returnComponent(),
      tagName: "div",
      className: "team-info-cell__wrapper",
    });
    this.teamNameCellWrapper.render();

    this.teamPeopleNumber = new Component({
      parentSelector: this.teamNameCellWrapper.returnComponent(),
      tagName: "div",
      className: "team-info-cell__number-people",
    });
    this.teamPeopleNumber.render();

    this.teamPercent = new Component({
      parentSelector: this.teamNameCellWrapper.returnComponent(),
      tagName: "div",
      className: "team-info-cell__percent",
    });
    this.teamPercent.render();

    this.teamCollapse = new Component({
      parentSelector: this.teamNameCellWrapper.returnComponent(),
      tagName: "div",
      className: "team-info-cell__collapse",
    });
    this.teamCollapse.render();
  }
}

export { Table };
