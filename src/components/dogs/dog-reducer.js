const initialState = {
    dogs: [],
    value: '',
    image: null,
    loading: true,
    error: false
};

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DOGS":
            return Object.assign({}, state, { dogs: action.name });

        case "INPUT_VALUE":
            return Object.assign({}, state, { value: action.value });

        case "BREED_IMAGE":
            return Object.assign({}, state, { image: action.image_url });

        case "LOADING":
            return Object.assign({}, state, { loading: action.loading });

        default:
            return state;
    }
};

export default dogReducer;