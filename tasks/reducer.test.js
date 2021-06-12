import { jest } from '@jest/globals';
import { reducer } from './reducer.js';

it('reducer console logs test', () => {
  console.log = jest.fn();

  reducer({ type: 'ADD', payload: { id: 1, name: 'Anton' } });
  reducer({ type: 'ADD', payload: { id: 2, name: 'Kirill' } });
  reducer({ type: 'ADD', payload: { id: 3, name: 'Natasha' } });
  reducer({ type: 'DEL', payload: 2 });
  reducer({ type: 'FIND', payload: 1 });
  expect(console.log).toHaveBeenCalledWith('Anton');
  reducer({ type: 'ADD', payload: { id: 4, name: 'Kirill2' } });
  reducer({ type: 'ADD', payload: { id: 5, name: 'Natasha32' } });
  reducer({ type: 'FIND', payload: 6 });
  expect(console.log).toHaveBeenCalledWith(undefined);
  reducer({ type: 'FIND', payload: 2 });
  expect(console.log).toHaveBeenCalledWith(undefined);
  reducer({ type: 'FIND', payload: 5 });
  expect(console.log).toHaveBeenCalledWith('Natasha32');
});
