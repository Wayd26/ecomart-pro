import axios from "axios";

//actions
export function doSomething(payload) {
    return {type: "DO_SOMETHING", payload}
}
export function getRemoteData() {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(json => {
                dispatch({type: "SET", key: 'remoteData', payload: json.data});
                //window.location = 'https://google.com';
            });
    };
}
export function getServices() {
    return function (dispatch) {
        return axios.get('services.json')
            .then(json => {
                console.log("json --> ", json)
                dispatch({type: "SET", key: 'services', payload: json.data});
                //window.location = 'https://google.com';
            });
    };
}