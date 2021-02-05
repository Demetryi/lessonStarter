import renderBar from "../renderBar";
import renderTeams from "../renderTeams";

const renderApp = () => {
  const appElement = document.getElementById("appRoot");
  const currentDate = new Date();
  let activeDate = new Date(currentDate);

  renderBar({ appElement, activeDate });
  renderTeams({ appElement, activeDate });

  let nextMonthButton = document.querySelector(".calendar-bar__control-button--next");
  let prevMonthButton = document.querySelector(".calendar-bar__control-button--prev");

  nextMonthButton.addEventListener("click", () => {
    activeDate = buttonAction("next", activeDate, appElement);
  });

  prevMonthButton.addEventListener("click", () => {
    activeDate = buttonAction("prev", activeDate, appElement);
  });

  function buttonAction(button, activeDate, appElement) {
    switch (button) {
      case "next":
        activeDate = new Date(activeDate.getFullYear(), activeDate.getMonth() + 1);
        break;

      case "prev":
        activeDate = new Date(activeDate.getFullYear(), activeDate.getMonth() - 1);
        break;

      default:
        break;
    }
    let calendarHeader = document.querySelector(".calendar-bar__header");
    calendarHeader.innerHTML = "";
    let [monthName, yearValue] = activeDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }).split(" ");
    calendarHeader.innerHTML = monthName + " " + yearValue;
    let calendarTable = document.querySelector(".calendar-table");
    appElement.removeChild(calendarTable);
    renderTeams({ appElement, activeDate });

    return activeDate;
  }
};

export default renderApp;
