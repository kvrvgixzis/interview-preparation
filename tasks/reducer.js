let store = {
  persons: [],
};

const reducer = (action) => {
  switch (action.type) {
    case 'ADD':
      store.persons = [...store.persons, action.payload];
      break;
    case 'DEL':
      store.persons = [...store.persons.filter((p) => p.id !== action.payload)];
      break;
    case 'FIND':
      const targetPerson = store.persons.find((p) => p.id === action.payload);
      console.log(targetPerson?.name);
      return targetPerson;
    default:
      break;
  }
};

reducer({ type: 'ADD', payload: { id: 1, name: 'Anton' } });
reducer({ type: 'ADD', payload: { id: 2, name: 'Kirill' } });
reducer({ type: 'ADD', payload: { id: 3, name: 'Natasha' } });
reducer({ type: 'DEL', payload: 2 });
reducer({ type: 'FIND', payload: 1 });
reducer({ type: 'ADD', payload: { id: 4, name: 'Kirill2' } });
reducer({ type: 'ADD', payload: { id: 5, name: 'Natasha32' } });
reducer({ type: 'FIND', payload: 6 });
reducer({ type: 'FIND', payload: 2 });
reducer({ type: 'FIND', payload: 5 });

// In Console:
// Anton
// undefined
// undefined
// Natasha32
