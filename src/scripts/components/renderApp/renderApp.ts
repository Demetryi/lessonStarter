import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
  const appElement = document.querySelector("#appRoot") as Element;
  const currentDate = new Date();
  renderCalendar({ appElement, currentDate });
  renderBar({ appElement, currentDate });
};

export default renderApp;
