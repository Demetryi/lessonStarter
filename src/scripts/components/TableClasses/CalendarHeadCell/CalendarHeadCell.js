import CalendarСell from "../CalendarCell";

export default class CalendarHeadСell extends CalendarСell {
  constructor({ parentSelector, tagName, className }) {
    super({ parentSelector, tagName, className });
  }

  addDate(weekDay, monthDay) {
    this.weekDay = weekDay;
    this.monthDay = monthDay;
  }
}
