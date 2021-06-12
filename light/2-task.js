/**
 * Reverse linked list
 */

import { LinkedList, printLinkedList } from '../linked-list.js';

const reverseList = (head) => {
  let current = head;
  let previous;
  let next;

  while (current !== null) {
    next = current.next;
    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
};

const list = new LinkedList();

[5, 3, 12, 6, 8].map(list.add);
printLinkedList(list.head);

const head = reverseList(list.head);
printLinkedList(head);
