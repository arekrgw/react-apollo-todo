export default {
  data: {
    currentId: 3,
    todos: [
      {
        __typename: "Todo",
        id: 1,
        name: 'test',
        content: "First test todo stored in Apollo cache",
        completed: false
      },
      {
        __typename: "Todo",
        id: 2,
        name: 'wash',
        content: 'Wash my Mercedes and then polish it',
        completed: true
      }
    ]
  }
}