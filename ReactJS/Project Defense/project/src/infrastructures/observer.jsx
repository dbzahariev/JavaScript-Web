let subscriptions = {
    'loginUser':[]
}

export default {
    events: {
        loginUser:'loginUser'
    }, 
    subscriptions: (eventName, fn) => subscriptions[eventName].push(fn),
    trigger: (eventName, data) => subscriptions[eventName].forEach(fn => fn(data))
}