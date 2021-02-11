import renderTeams from "../renderTeams";
import Component from "../Component";
import Calendar from "../Calendar";

const renderApp = () => {
  const departmentTeams = renderTeams();

  const appElement = new Component({ parentSelector: "body", tagName: "main", className: "appRoot" }).render();
  const calendar = new Calendar({
    parentSelector: appElement,
    departmentTeams,
    className: "calendar",
  });
  calendar.render();

  const addButton = appElement.querySelector(".calendar-table__add-vacation-button");
  const cancelButton = appElement.querySelector(".modal__btn-cancel");
  const sendButton = appElement.querySelector(".modal__btn-send");
  const modal = appElement.querySelector(".modal");
  const modalOoverlay = appElement.querySelector(".modal__overlay");

  addButton.addEventListener("click", () => {
    modal.classList.toggle("visible");
    modalOoverlay.classList.toggle("visible");
  });

  cancelButton.addEventListener("click", () => {
    modal.classList.toggle("visible");
    modalOoverlay.classList.toggle("visible");
  });

  sendButton.addEventListener("click", () => {
    modal.classList.toggle("visible");
    modalOoverlay.classList.toggle("visible");
  });
};
export default renderApp;
