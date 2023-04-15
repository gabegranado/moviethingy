// Reducers specify how app states changes
// Accepts state and action as arguments and returns the next State of App

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      console.log("posts: ", posts, "action: ", action);
      return action.payload;
    case "LOG_OUT":
      return [undefined, action];
    case "CREATE":
      console.log("CREATE");
      //... makes copy of the post object
      return [...posts, action.payload];
    default:
      return posts;
  }
};
