import renderTeams from "../renderTeams";
import Component from "../Component";
import Calendar from "../Calendar";

const renderApp = () => {
  const departmentTeams = renderTeams();

  let appElement = new Component({ parentSelector: "body", tagName: "main", className: "appRoot" }).render();
  let calendar = new Calendar({
    parentSelector: appElement,
    departmentTeams: departmentTeams,
    className: "calendar",
  }).render();

  let addBtn = appElement.returnComponent().querySelector(".calendar-table__add-vacation-button");
  let cancelBtn = appElement.returnComponent().querySelector(".modal__btn-cancel");
  let sendBtn = appElement.returnComponent().querySelector(".modal__btn-send");
  let modal = appElement.returnComponent().querySelector(".modal");
  let modalOoverlay = appElement.returnComponent().querySelector(".modal__overlay");

  addBtn.addEventListener("click", function (e) {
    modal.classList.toggle("visible");
    modalOoverlay.classList.toggle("visible");
  });

  cancelBtn.addEventListener("click", function (e) {
    modal.classList.toggle("visible");
    modalOoverlay.classList.toggle("visible");
  });

  sendBtn.addEventListener("click", function (e) {
    modal.classList.toggle("visible");
    modalOoverlay.classList.toggle("visible");
  });
};
export default renderApp;
