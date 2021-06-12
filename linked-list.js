class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add = (value) => {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = new Node(value);
    }

    this.length++;
    return this;
  };
}

export const printLinkedList = (head) => {
  let current = head;
  const array = [current.value];

  while (current.next) {
    current = current.next;
    array.push(current.value);
  }

  console.log('List:', array);
};
