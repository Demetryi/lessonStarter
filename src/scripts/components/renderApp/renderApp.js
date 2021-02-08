import renderTeams from "../renderTeams";
import Component from "../Component";
import Calendar from "../Calendar";

const renderApp = () => {
  const departmentTeams = renderTeams();

  let appElement = new Component({ parentSelector: "body", tagName: "main", className: "appRoot" });
  appElement.render();
  let calendar = new Calendar({
    parentSelector: appElement.returnComponent(),
    departmentTeams: departmentTeams,
    className: "calendar",
  }).render();
};
export default renderApp;
