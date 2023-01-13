const reducer =(state, action) =>{
    switch (action.type) {
        case 'FETCH_ALL'  :
            return action.payload;
        case 'CREATE' :
            return state;
            break;
    
        default:
            break;
    }
}