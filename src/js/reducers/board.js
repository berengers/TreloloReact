const defaultBoard = {
  id: 456,
  name: "Holidays",
  lists: [
    {
      id: 21,
      name: "Backlog",
      items: [
        { id: 1,
          title: "Test Coverage",
          description: "It's a full description what i need"
        },
        {
          id: 2,
          title: "Learn english",
          description: ""
        }
      ]
    },
    {
      id: 34,
      name: "Sprint",
      items: [
        {
          id: 3,
          title: "Make an API",
          description: "An API in .Net Core"
        },
        {
          id: 4,
          title: "Refacto Navbar",
          description: "A lot of things to do for have a beautiful navbar and full responsive"
        }
      ]
    }
  ]
}

export function currentBoard(state=defaultBoard, action) {
  switch (action.type) {
    case "":
    default:
      return state
  }
}