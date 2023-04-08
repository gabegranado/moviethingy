// Reducers specify how app states changes
// Accepts stat and action as arguments and returns the next State of App

export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log('need things');
            return action.payload;
        case 'CREATE':
            console.log('CREATE');
            //... makes copy of the post object
            return [...posts, action.payload];
        default:
            return posts;
    }
}