export default  fodos(state = [], action) {
    switch (action.type) {
        case "ADD_TOTD":
            return [...state, {username: action.paylode.username}];
        default:
            return state;
    }
}