'use strict';

let configGet = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/html'
    }
}

let configPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/html'
    }
}

setWord()

function setWord() {
    fetch('http://localhost:8080/test/indonesian', configGet)
        .then((response) => response.text())
        .then((testWord) => document.getElementById('tested-word').textContent = testWord);
}

document.getElementById('enter-word-button').addEventListener('click', () => {
    let json = {
        askedQuestion: document.getElementById('tested-word').textContent,
        answer: document.getElementById('answer-field').value
    }
    configPost.body = JSON.stringify(json);
    fetch('http://localhost:8080/test/indonesian', configPost)
        .then((response) => response.text())
        .then((verification) => {
            document.getElementById('test-result').textContent = verification;
            document.getElementById('answer-field').value = ""
            setWord();
        });
})
