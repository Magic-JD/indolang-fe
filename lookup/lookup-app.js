'use strict';

let english = true;

let config = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/html'
    }
}

const getSwitchLanguage = document.getElementById('switch-lg-btn');
getSwitchLanguage.addEventListener('click', () => {
    english = !english;
    if(english){
        document.getElementById('title').textContent = "Translate English to Indonesian";
        getSwitchLanguage.textContent = "Switch to translate Indonesian"
    } else {
        document.getElementById('title').textContent = "Translate Indonesian to English";
        getSwitchLanguage.textContent = "Switch to translate English"
    }
});


const getTranslation = document.getElementById('translate-btn');
getTranslation.addEventListener('click', () => callToGetTranslation());

function callToGetTranslation(){
    var textBox = document.getElementById("translate");
    var word = textBox.value;
    getCorrectLanguageResponse(word)
        .then((response) => {
            console.log(response)
            return response.text();
        })
        .then((translation) => {
            document.querySelector('.translation').textContent = translation;
        })
    textBox.value = "";
}

function getCorrectLanguageResponse(word){
    if(english){
        return fetch('https://indolang.herokuapp.com/lookup/english/'+word, config)
    } else {
        return fetch('https://indolang.herokuapp.com/lookup/indonesian/'+word, config)
    }
}