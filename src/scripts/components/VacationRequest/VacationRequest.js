import Component from "../Component";

export default class VacationRequest extends Component {
  constructor({ parentSelector, date, tableComponent, className }) {
    super({ parentSelector, className });

    this.overlay = new Component({ parentSelector: parentSelector, className: "modal__overlay" }).render();
    this.renderHeader = new ModalHeader({ parentSelector: this.component, className: "modal__header" }).render();
    this.renderBody = new ModalBody({ parentSelector: this.component, className: "modal__body" }).render();
  }

  render() {
    super.render();
  }
}

class ModalHeader extends Component {
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

class ModalBody extends Component {
  constructor({ parentSelector, className }) {
    super({ parentSelector, className });

    this.bodyTitle = new Component({ parentSelector: this.component, className: "modal__title" });
    this.bodyTitle.addContent("Dates");
    this.bodyTitle.render();

    this.renderColumns();

    this.bodyTitle = new Component({ parentSelector: this.component, className: "modal__title" });
    this.bodyTitle.addContent("Vac Type");
    this.bodyTitle.render();

    this.bodyMenu = new Component({ parentSelector: this.component, className: "modal__menu" });
    this.bodyMenu.render();
    this.renderFooter();
  }

  renderColumns() {
    this.bodyDatesInner = new Component({ parentSelector: this.component, className: "modal_dates_inner" });
    this.bodyDatesInner.addContent(`<div class="modal__column">
                                      <div class="modal__subtitle">From</div>
                                      <div class="modal__date">15.06.2020</div>
                                    </div>
                                    <div class="modal__column">
                                      <div class="modal__subtitle">To</div>
                                      <div class="modal__date">18.06.2020</div>
                                    </div>`);
    this.bodyDatesInner.render();
  }

  renderFooter() {
    this.bodyFooter = new Component({ parentSelector: this.component, className: "modal__footer" });
    this.bodyFooter.render();

    this.bodyBtnCancel = new Component({
      parentSelector: this.bodyFooter.returnComponent(),
      className: ["modal__btn", "modal__btn-cancel"],
    });
    this.bodyBtnCancel.addContent("Cancel");
    this.bodyBtnCancel.render();

    this.bodyBtnSend = new Component({
      parentSelector: this.bodyFooter.returnComponent(),
      className: ["modal__btn", "modal__btn-send"],
    });
    this.bodyBtnSend.addContent("Send");
    this.bodyBtnSend.addClass("modal__btn-green");
    this.bodyBtnSend.render();
  }
}
