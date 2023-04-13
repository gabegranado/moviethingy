export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log("getting user info");
            return action.payload;
        case 'FETCH_TICKET':
            console.log("FETCHING TICKETS");
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}