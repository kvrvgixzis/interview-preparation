let store = {
  persons: [],
};

export const reducer = (action) => {
  switch (action.type) {
    case 'ADD':
      store.persons = [...store.persons, action.payload];
      break;
    case 'DEL':
      store.persons = [
        ...store.persons.filter((p) => p.id !== action.payload),
      ];
      break;
    case 'FIND':
      return store.persons.find((p) => p.id === action.payload)?.name;
    default:
      break;
  }
};
