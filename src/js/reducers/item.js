const defaultItem = {
  id: 45,
  title: "The title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at commodo mauris. Duis faucibus sapien ac dictum aliquam. Aenean pretium mattis libero molestie hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce at commodo nisi. Suspendisse sit amet lacus cursus nibh tempus luctus."
}

export function currentItem(state=defaultItem, action) {
  switch (action.type) {
    case "value":
      
    default:
      return state
  }
}