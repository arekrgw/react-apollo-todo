export default {
  data: {
    currentId: 3,
    todos: [
      {
        __typename: "Todo",
        id: 1,
        name: "Buy Lay's",
        content: "Find and buy Lays in Lidl because its the cheapest",
        completed: false
      },
      {
        __typename: "Todo",
        id: 2,
        name: "Wash a car",
        content: "Wash my Mercedes and then polish it",
        completed: false
      }
    ]
  }
};
