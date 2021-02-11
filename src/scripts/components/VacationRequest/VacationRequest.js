import Component from "../Component";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

export default class VacationRequest extends Component {
  constructor({ parentSelector, className }) {
    super({ parentSelector, className });

    this.overlay = new Component({ parentSelector, className: "modal__overlay" }).render();
    this.renderHeader = new ModalHeader({ parentSelector: this.component, className: "modal__header" }).render();
    this.renderBody = new ModalBody({ parentSelector: this.component, className: "modal__body" }).render();
  }

  render() {
    super.render();
  }
}
