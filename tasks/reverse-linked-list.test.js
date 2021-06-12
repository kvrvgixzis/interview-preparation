import { jest } from '@jest/globals';
import { LinkedList, printLinkedList } from '../linked-list.js';
import { reverseList } from './reverse-linked-list.js';

it('reverse linked list test', () => {
  console.log = jest.fn();

  const list = new LinkedList([5, 3, 12, 6, 8]);
  printLinkedList(list.head);
  expect(console.log).toHaveBeenCalledWith([5, 3, 12, 6, 8]);

  const head = reverseList(list.head);
  printLinkedList(head);
  expect(console.log).toHaveBeenCalledWith([8, 6, 12, 3, 5]);
});
