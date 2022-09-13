'use strict';

let english = !true;

let config = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/html'
    }
}

setDictionary();

document.getElementById('switch-dct-btn').addEventListener('click', () => setDictionary());

function setDictionary(){
    english = !english;
    callToGetDictionary();
    if(english){
        document.getElementById('title').textContent = "Dictionary sorted by English word";
        document.getElementById('switch-dct-btn').textContent = "Switch to Indonesian dictionary"
    } else {
        document.getElementById('title').textContent = "Dictionary sorted by Indonesian word";
        document.getElementById('switch-dct-btn').textContent = "Switch to English dictionary"
    }
}

function callToGetDictionary(){
    getCorrectLanguage()
        .then((response) => {
            console.log(response)
            return response.text();
        })
        .then((dictionary) => {
            document.getElementById('dictionary-content').textContent = dictionary;
        })
}

function getCorrectLanguage(){
    if(english){
        return fetch('https://indolang.herokuapp.com/dictionary/english', config)
    } else {
        return fetch('https://indolang.herokuapp.com/dictionary/indonesian', config)
    }
}