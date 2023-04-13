// Reducers specify how app states changes
// Accepts state and action as arguments and returns the next State of App

export default (userData=[], action) => {
    switch (action.type) {
        case 'FETCH_USER_DATA':
            console.log('user data');
            console.log("action" + action.payload[0]);
            return action.payload;
        default:
            return userData;
    }
}
