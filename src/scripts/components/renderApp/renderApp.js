import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
  const appElement = document.getElementById("appRoot");
  const currentDate = new Date();
  console.log(currentDate);
  renderCalendar({ appElement, currentDate });
  renderBar({ appElement, currentDate });
};

export default renderApp;
