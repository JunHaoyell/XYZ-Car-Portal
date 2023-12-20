export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

//Get Current User Profile - Private Route
export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/kyn/user/me",
        method: 'GET'
    });
    //return axios.get(API_BASE_URL + '/kyn/user/me');
}

//Post Login User - Public Route
export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/kyn/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

//Post Register User - Public Route
export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/kyn/register",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}