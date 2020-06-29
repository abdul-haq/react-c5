const numReducer=(state,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return 0
        default:
            break;
    }
}

export default numReducer