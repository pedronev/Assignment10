export default function(state={},action){
    switch(action.type){
        case 'GET_FATFREE':
            return{...state,latest:action.payload}
        default:
            return state;
    }
}
