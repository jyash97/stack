class Stack {
  constructor() {
    this.items = [];
    this.pointer = -1;
  }

  push(item) {
    this.items.push(item);
    this.pointer = this.pointer + 1;
  }

  pop() {
    const item = this.items.pop();
    this.pointer = this.pointer - 1;
    return item;
  }

  peek() {
    if (this.pointer !== -1) {

      return this.items[this.pointer];
    }
    return undefined;
  }

  isEmpty() {
    return this.pointer === -1;
  }
}

export default Stack;
