import { Component } from "../Component";
import { ITableProperties, ITeam, TTeamsData } from "../types";
import { TEAMS } from "../../constants";

export class Table extends Component {
  date: Date;
  teams: TTeamsData;
  preData: { teams: ITeam[] };
  constructor({ parent, date }: ITableProperties) {
    super({ parent, tagName: "table" });
    this.date = date;
    this.teams = null;
    this.preData = TEAMS;
    this.getServerData().then(() => this.update());
    this.generateTable();
  }

  getServerData(): Promise<ITeam[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(this.preData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json: { teams: ITeam[] }) => {
        this.setServerData(json.teams);
        return json.teams;
      });
  }
  update(): void {}
  generateTable(): void {
    this.generateTableHead();
  }
  generateTableHead(): void {
    const calendarHead = new Component({ parent: this.component, tagName: "thead" });
    calendarHead.render();
    /*
    let outputCalendarHTML = `<td class="addVacationCell outputItem "><button class="addVacationBtn"><span>+</span>Add Vacation</button></td>`;
    const outputCalendar = this.component.querySelector(".outputCalendar");
    const daysInCurrentMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (let index = 1; index <= daysInCurrentMonth; index++) {
      const chosenDate = new Date(this.date.getFullYear(), this.date.getMonth(), index);
      const dateString = chosenDate.toLocaleDateString("en-US", { day: "numeric", weekday: "short" });
      const isWeekend = dayName === "Sat" || dayName === "Sun";
      outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
                <span class="outputDay">${dayName.slice(0, -1)}</span> 
                <span class="outputDate">${date}</span>
                </td>`;
    }
    outputCalendarHTML += `<td class="sumCell outputItem weekend">Sum</td>`;
    outputCalendar.innerHTML = outputCalendarHTML;
    const addVacationButton = this.component.querySelector(".addVacationBtn");
    addVacationButton.addEventListener("click", this.popupWindowContext.show.bind(this.popupWindowContext)); */
  }
  setServerData(serverData: ITeam[]): void {
    this.teams = serverData;
  }
  updateTable(newDate: Date): void {
    this.date = newDate;
  }
}
