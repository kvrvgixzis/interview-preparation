import { LinkedList, listToString } from '../linked-list.js';
import { reverseList } from './reverse-linked-list.js';

it('reverse linked list test', () => {
  const list = new LinkedList([5, 3, 12, 6, 8]);
  expect(listToString(list.head)).toBe('5, 3, 12, 6, 8');

  const head = reverseList(list.head);
  expect(listToString(head)).toBe('8, 6, 12, 3, 5');
});
