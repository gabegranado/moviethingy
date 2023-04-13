// Reducers specify how app states changes
// Accepts state and action as arguments and returns the next State of App

export default (movies=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL_MOVIES':
            console.log('need things');
            // console.log("action.payload" + action.payload);

            return action.payload;
        case 'CREATE':
            console.log('CREATE MOVIE');
            //... makes copy of the post object
            return [...movies, action.payload];
        default:
            return movies;
    }
}