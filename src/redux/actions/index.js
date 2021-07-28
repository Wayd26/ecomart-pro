import axios from "axios";

//actions
export function doSomething(payload) {
    return { type: "DO_SOMETHING", payload }
}
export function getRemoteData() {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(json => {
                dispatch({ type: "SET", key: 'remoteData', payload: json.data });
                //window.location = 'https://google.com';
            });
    };
}
export function getServices() {
    return function (dispatch) {
        return axios.get('services.json')
            .then(json => {
                console.log("services json --> ", json)
                dispatch({ type: "SET", key: 'services', payload: json.data });
                //window.location = 'https://google.com';
            });
    };
}
export function getCatalogues() {
    return function (dispatch) {
        return axios.get('catalogues.json')
            .then(json => {
                console.log("catalogues json --> ", json)
                dispatch({ type: "SET", key: 'catalogues', payload: json.data });
                //window.location = 'https://google.com';
            });
    };
}

export function getTotalElementsInCart() {

}