import { LinkedList, listToString } from '../linked-list';
import { mergeTwoLists } from './merge-two-sorted-lists';

describe('merge two sorted lists', () => {
  it('1 test', () => {
    const l1 = new LinkedList([1, 2, 4]);
    const l2 = new LinkedList([1, 3, 4]);

    const merged = mergeTwoLists(l1.head, l2.head);
    expect(listToString(merged)).toBe('1, 1, 2, 3, 4, 4');
  });
});
