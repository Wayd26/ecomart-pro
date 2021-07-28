const initialState = {
    sharedState: null,
    servicesInCart: [],
    catalogsInCart: [],
    totalInCart: null
};

function rootReducer(state = initialState, action) {
    if (!state) {
        return null;
    }
    //console.log(action);
    switch (action.type) {
        case "DO_SOMETHING": {
            console.log("state : ", { ...state });
            console.log(state);
            console.log(action);
            return { ...state, something: action.payload };
        }
        case "SET": {
            return { ...state, [action.key]: action.payload };
        }
        case "ADD_SERVICES_IN_CART":
            return { ...state, [action.key]: action.payload };
        case "ADD_CATALOGUES_IN_CART":
            return { ...state, [action.key]: action.payload };
        case "SET_TOTAL_IN_CART":
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
}

export default rootReducer;
