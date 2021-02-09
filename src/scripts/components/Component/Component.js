export default class Component {
  constructor({ parentSelector, tagName = "div", className }) {
    if (typeof parentSelector === "string") {
      this.parent = document.querySelector(parentSelector);
    } else {
      this.parent = parentSelector;
    }
    this.component = document.createElement(tagName);

    if (Array.isArray(className)) {
      this.component.classList.add(...className);
    } else {
      this.component.classList.add(className);
    }
  }

  render() {
    this.parent.append(this.component);
    return this.component;
  }

  addClass(className) {
    if (Array.isArray(className)) {
      this.component.classList.add(...className);
    } else {
      this.component.classList.add(className);
    }
  }

  removeClass(className) {
    if (Array.isArray(className)) {
      this.component.classList.remove(...className);
    } else {
      this.component.classList.remove(className);
    }
  }

  addContent(content) {
    this.component.innerHTML = content;
  }

  returnComponent() {
    return this.component;
  }
}
