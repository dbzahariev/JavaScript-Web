import $ from 'jquery';
const kinveyBaseUrl = "https://baas.kinvey.com/";
// const kinveyAppKey = "kid_ByLBw0l77";
const kinveyAppKey = "kid_rkgIDsfrE";
// const kinveyAppSecret = "cc84886438ed4167a0232206d0491a9b";
const kinveyAppSecret = "888999447f6e44469c4223884b374088";

function makeAuth(type) {
    return type === 'basic'
        ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        :  'Kinvey ' + sessionStorage.getItem('authtoken');
}

function makeRequest(method, module, endpoint, auth, query) {
    let url = kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint;
    if (query)
    url+='?query' + JSON.stringify(query)

    return {
        method,
        url: url,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };
}

function get (module, endpoint, auth, query) {
    return $.ajax(makeRequest('GET', module, endpoint, auth, query));
}

function post (module, endpoint, auth, data) {
    // console.log(module, endpoint, auth, data)
    let req = makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

function update (module, endpoint, auth, data) {
    let req = makeRequest('PUT', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

function remove (module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth));
}

export default {
    get,
    post,
    update,
    remove
}
