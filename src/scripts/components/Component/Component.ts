import { IComponentProperties } from "../types";

export class Component {
  parent: Element;
  component: Element;
  constructor({ parent, tagName = "div", classNames, content }: IComponentProperties) {
    this.parent = typeof parent === "string" ? (document.querySelector(parent) as Element) : parent;
    this.component = document.createElement(tagName);
    this.addClassNames(classNames);
    this.addContent(content);
  }

  render(): Element {
    this.parent.append(this.component);
    return this.component;
  }

  addClassNames(classNames?: string | string[]): void {
    if (classNames) {
      if (typeof classNames === "string") {
        this.component.classList.add(classNames);
      } else {
        this.component.classList.add(...classNames);
      }
    }
  }

  addContent(content?: string | Element): void {
    if (content) {
      this.component.append(content);
    }
  }
}
