export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log('need things');
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}