class Node {
  constructor(value) {
    this.value = value;
    this.min = null;
    this.prev = null;
  }
}

class MinStack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push = (value) => {
    const node = new Node(value);

    if (this.length === 0) {
      node.min = value;
      this.head = node;
    } else {
      node.min = value < this.head.min ? value : this.head.min;
      node.prev = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  };

  pop = () => {
    if (this.length === 0) {
      console.log('Stack is empty');
      return;
    }

    this.head = this.head?.prev ?? null;
    this.length--;
  };

  top = () => {
    if (this.length === 0) {
      console.log('Stack is empty');
      return;
    }

    const top = this.head.value;
    console.log('top: ', top);
    return top;
  };

  getMin = () => {
    if (this.length === 0) {
      console.log('Stack is empty');
      return;
    }

    const min = this.head.min;
    console.log('min: ', min);
    return min;
  };
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
