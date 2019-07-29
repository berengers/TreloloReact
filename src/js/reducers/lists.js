import { ADD_LIST } from '../const'

const defaultLists = [
  {
    id: 21,
    title: "Backlog",
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
    title: "Sprint",
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

export function lists(state=defaultLists, action) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload.list]
  
    default:
      return state
  }
}