import { Table } from "./Table";

export interface IComponentProperties {
  parent: string | Element;
  tagName?: string;
  classNames?: string | string[];
  content?: string | Element;
}

export interface ITableProperties extends IComponentProperties {
  date: Date;
}

export interface INavigationProperties extends IComponentProperties {
  date: Date;
  tableComponent: Table;
}

export interface ITeam {
  name: string;
  percentageOfAbsent: number[];
  members: { name: string; vacations: { startDate: string; endDate: string; type: string }[] }[];
}

export type TTeamsData = ITeam[] | null;
