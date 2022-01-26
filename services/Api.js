import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
    baseURL : "https://api.imgflip.com/"
});

//method to execute all requests from here
const apiRequest = async (method, url, request) => {
    const headers = {
        // authorization: ""
    };

    return axiosAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data);
    })
    .catch(err => {
        return Promise.reject(err);
    });
};

//executes GET request
const get = (url, request) => apiRequest("get", url, request);

//executes the delete request
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

//executes the post request
const post = (url, request) => apiRequest("post", url, request);

//executes the put request
const put = (url, request) => apiRequest("put", url, request);

// expose to other services or actions
const API = {
    get,
    delete: deleteRequest,
    post,
    put,
};

export default API;