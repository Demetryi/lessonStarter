import Component from "../Component";

export default class ModalHeader extends Component {
  constructor({ parentSelector, className }) {
    super({ parentSelector, className });

    this.headerName = new Component({ parentSelector: this.component, className: "moddal__name" });
    this.headerName.addContent("Vacation Request");
    this.headerName.render();

    this.headerDays = new Component({ parentSelector: this.component, className: "moddal__days" });
    this.headerDays.addContent("8 Days");
    this.headerDays.render();
  }
}
