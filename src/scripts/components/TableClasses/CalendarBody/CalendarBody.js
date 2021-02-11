import Component from "../../Component";
import CalendarRow from "../CalendarRow";
import TeamNameCell from "../TeamNameCell";
import CalendarСell from "../CalendarCell";

export default class CalendarBody extends Component {
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
            counter: comandCounter + 1,
          });
          this.teamCell.render();
          this.bodyRow.addTeamInfoCell(this.teamCell);
        } else {
          this.bodyRow.addClass(`team${comandCounter + 1}`);

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
            `${departmentTeams.teams[teamCounter].percentageOfAbsent[currentDate.getMonth()]}%`,
          );
        } else {
          this.arrayTeams[teamCounter][teamRowCounter].nameCell.addContent(
            departmentTeams.teams[teamCounter].members[teamRowCounter - 1].name,
          );
        }

        let activeDay = firstDayInMonth;
        for (let dayCounter = 0; dayCounter < daysInMonth; dayCounter++) {
          this.arrayTeams[teamCounter][teamRowCounter].rowCells[dayCounter].removeClass("hide");

          if (activeDay % 7 === 6 || activeDay % 7 === 0) {
            this.arrayTeams[teamCounter][teamRowCounter].rowCells[dayCounter].addClass("weekend");
          }
          activeDay += 1;
        }
      }
    }
  }
}
