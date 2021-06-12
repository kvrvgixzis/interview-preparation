class Node {
  constructor(value) {
    this.value = value;
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

export const listToString = (head) => {
  let current = head;
  const array = [current.value];

  while (current.next) {
    current = current.next;
    array.push(current.value);
  }

  return array.join(', ');
};
