import Component from "../Component";

export default class ModalBody extends Component {
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
