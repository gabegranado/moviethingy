export default (movie=[], action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            console.log('need things');
            // console.log("action.payload" + action.payload);

            return action.payload;
        default:
            return movie;
    }
}