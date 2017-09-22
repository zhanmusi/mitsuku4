var rest = require('rest');
var when = require('when');

fetchRemoteGreeting()
    .then(addExclamation)
    .catch(handleError)
    .done(function(greeting) {
        console.log("Here i am"+greeting);
    });

function fetchRemoteGreeting() {
    // convert native Promise to a when.js promise for 'hello world'
    var result = rest('http://example.com/greeting');
    console.log("IIIII"+result)
    return when(result)
}

function addExclamation(greeting) {
    return greeting + '!!!!'
}

function handleError(e) {
    return ('drat!');
}