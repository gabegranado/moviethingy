// Reducers specify how app states changes
// Accepts state and action as arguments and returns the next State of App

export default (ticket = [], action) => {
  switch (action.type) {
    case "BUY_TICKET":
      console.log("BUYINT TICKET", action.payload);
      //... makes copy of the post object
      return [...ticket, action.payload];
    default:
      return ticket;
  }
};
