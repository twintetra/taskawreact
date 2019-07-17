

const initialState = {
    url: ''
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RND_CAT":
            return {
                url: action.url
            };

        default:
            return state;
    }


};





export default reducer;