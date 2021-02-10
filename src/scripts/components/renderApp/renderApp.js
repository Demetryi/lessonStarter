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
};
export default renderApp;
