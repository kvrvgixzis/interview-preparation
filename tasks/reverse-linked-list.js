/**
 * Reverse linked list
 */

import { LinkedList, printLinkedList } from '../linked-list.js';

export const reverseList = (head) => {
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
