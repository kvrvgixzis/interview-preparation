class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor(initialArray) {
    this.head = null;
    this.length = 0;

    if (initialArray) {
      initialArray.map(this.add);
    }
  }

  add = (val) => {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = new Node(val);
    }

    this.length++;
    return this;
  };
}

export const listToString = (head) => {
  let current = head;
  const array = [current.val];

  while (current.next) {
    current = current.next;
    array.push(current.val);
  }

  return array.join(', ');
};
