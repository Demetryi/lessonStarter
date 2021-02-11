import Component from "../../Component";
import CalendarСell from "../CalendarCell";

export default class TeamNameCell extends CalendarСell {
  constructor({ parentSelector, tagName, className, counter }) {
    super({ parentSelector, tagName, className });
    this.counter = counter;
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
    this.teamCollapse.render().addEventListener("click", () => {
      const userRows = document.querySelectorAll(`.team${this.counter}`);
      this.teamCollapse.returnComponent().classList.toggle("active");
      for (const userRow of userRows) {
        userRow.classList.toggle("hide");
      }
    });
  }
}
