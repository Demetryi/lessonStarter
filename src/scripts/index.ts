import "../styles/index.scss";
import { Calendar } from "./components";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const calendarApp = new Calendar({ parent: document.querySelector("#appRoot") as Element, classNames: "calendar" });

declare global {
  interface Window {
    calendarApp: Calendar;
  }
}
window.calendarApp = calendarApp;
