class Node {
  constructor(value) {
    this.value = value;
    this.min = null;
    this.prev = null;
  }
}

export class MinStack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push = (value) => {
    const node = new Node(value);

    if (this.length === 0) {
      node.min = value;
    } else {
      node.min = value < this.head.min ? value : this.head.min;
      node.prev = this.head;
    }

    this.head = node;
    this.length++;
    return this;
  };

  pop = () => {
    if (this.length === 0) throw 'Stack is empty';
    this.head = this.head?.prev ?? null;
    this.length--;
  };

  top = () => {
    if (this.length === 0) throw 'Stack is empty';
    return this.head.value;
  };

  getMin = () => {
    if (this.length === 0) throw 'Stack is empty';
    return this.head.min;
  };
}
