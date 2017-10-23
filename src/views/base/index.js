import Block from 'Components/block/';

class BaseView extends Block {
  constructor(parent, tag, classes) {
    const element = document.createElement(tag);
    super(element);

    this.addClasses(classes);

    this.parent = new Block(document.querySelector(``));
  }

  show() {
    this.parent.append(this);
  }

  hide() {
    this.parent.remove(this);
  }
}

export default BaseView;
