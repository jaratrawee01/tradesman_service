const getUrlReducer = (state = "http://localhost:3003",  action) => {
   switch (action.type) {
        case 'GETURL':
        return "http://localhost:3003";
       
        default: 
        return state;
    }
 
}

export default getUrlReducer;