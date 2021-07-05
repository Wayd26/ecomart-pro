let initialState = {
  servicesInCart : [],
  catalogsInCart : [],
  
    
}

export default function reducer(currentState = initialState, action){
    switch (action.type){
        case "ADD_SERVICES_IN_CART" : 
            return {...currentState, [action.key]: action.payload};
        default:
            return currentState
    }
}