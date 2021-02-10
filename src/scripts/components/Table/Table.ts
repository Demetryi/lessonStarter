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
    this.getServerData();
  }

  getServerData(): void {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(this.preData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json: { teams: ITeam[] }) => {
        this.teams = json.teams;
        // this.update();
      });
  }

  setServerData(serverData: ITeam[]): void {
    this.teams = serverData;
  }
  updateTable(newDate: Date): void {
    this.date = newDate;
  }
}
