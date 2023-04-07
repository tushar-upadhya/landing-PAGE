const reducer = (state, action) => {
    //? home page

    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    //? about page

    if (action.type === "ABOUT_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        };
    }
    //? service page

    if (action.type === "GET_SERVICE") {
        return {
            ...state,
            service: action.payload,
        };
    }
    return state;
};

export default reducer;
