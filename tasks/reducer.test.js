import { reducer } from './reducer.js';

it('reducer test', () => {
  reducer({ type: 'ADD', payload: { id: 1, name: 'Anton' } });
  reducer({ type: 'ADD', payload: { id: 2, name: 'Kirill' } });
  reducer({ type: 'ADD', payload: { id: 3, name: 'Natasha' } });
  reducer({ type: 'DEL', payload: 2 });
  expect(reducer({ type: 'FIND', payload: 1 })).toBe('Anton');
  reducer({ type: 'ADD', payload: { id: 4, name: 'Kirill2' } });
  reducer({ type: 'ADD', payload: { id: 5, name: 'Natasha32' } });
  expect(reducer({ type: 'FIND', payload: 6 })).toBe(undefined);
  expect(reducer({ type: 'FIND', payload: 2 })).toBe(undefined);
  expect(reducer({ type: 'FIND', payload: 5 })).toBe('Natasha32');
});
