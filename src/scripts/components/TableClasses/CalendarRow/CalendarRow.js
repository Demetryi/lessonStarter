import Component from "../../Component";

export default class CalendarRow extends Component {
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
