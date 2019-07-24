export const requestDogName = (data) => {
    return {
        type: "FETCH_DOGS",
        name: data
    }
};

export const inputValue = (value) => {
    return {
        type: "INPUT_VALUE",
        value: value
    }
};

export const breedImage = (url) => {
    return {
        type: "BREED_IMAGE",
        image_url: url
    }
};

export const loading = (loading) => {
    return {
        type: "LOADING",
        loading: loading
    }
};
