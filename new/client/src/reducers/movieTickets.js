// Reducers specify how app states changes
// Accepts state and action as arguments and returns the next State of App

export default (movieTickets=[], action) => {
    switch (action.type) {
        case 'FETCH_TICKETS':
            console.log('FETCH_TICKETS', action.payload);
            return action.payload;
        // case 'CREATE':
        //     console.log('CREATE MOVIE');
        //     //... makes copy of the post object
            // return [...movies, action.payload];
        case 'CLEAR_TICKETS':
            return [undefined, action]
        default:
            return movieTickets;
    }
}