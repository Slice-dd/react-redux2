export const reduce = ( state = {count: 0} ,action) => {
    switch(action.type){
        case 'add':
            return {...state , count: action.payload }
        default: 
            return {...state}   
    }
}
