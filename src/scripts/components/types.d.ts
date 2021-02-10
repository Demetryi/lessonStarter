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

interface IVacancy {
  startDate: string;
  endDate: string;
  type: string;
}

interface IMember {
  name: string;
  vacations: IVacancy[];
}

export interface ITeam {
  name: string;
  percentageOfAbsent: number[];
  members: IMember[];
}

export type TTeamsData = ITeam[] | null;
