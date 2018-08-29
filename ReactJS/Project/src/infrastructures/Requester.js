import $ from 'jquery';
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_ByLBw0l77";
const kinveyAppSecret = "cc84886438ed4167a0232206d0491a9b";


function makeAuth(type) {
    return type === 'basic'
        ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        :  'Kinvey ' + sessionStorage.getItem('authtoken');
}

function makeRequest(method, module, endpoint, auth) {
    return {
        method,
        url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };
}

function get (module, endpoint, auth) {
    return $.ajax(makeRequest('GET', module, endpoint, auth));
}

function post (module, endpoint, auth, data) {
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
    remove,
}
