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

  let spoilerButtons = document.querySelectorAll(".team-info-cell__collapse");

  for (let buttonCounter = 0; buttonCounter < spoilerButtons.length; buttonCounter++) {
    spoilerButtons[buttonCounter].addEventListener("click", () => {
      let userRows = document.querySelectorAll(`.team${buttonCounter + 1}`);
      spoilerButtons[buttonCounter].classList.toggle("active");
      for (let userRowCounter = 0; userRowCounter < userRows.length; userRowCounter++) {
        userRows[userRowCounter].classList.toggle("hide");
      }
    });
  }
  let addBtn = appElement.querySelector(".calendar-table__add-vacation-button");
  let cancelBtn = appElement.querySelector(".modal__btn-cancel");
  let sendBtn = appElement.querySelector(".modal__btn-send");
  let modal = appElement.querySelector(".modal");
  let modalOoverlay = appElement.querySelector(".modal__overlay");

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
