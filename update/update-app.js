'use strict';

let configPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/html'
    }
}

const update = document.getElementById('add-word-btn');
update.addEventListener('click', () => {
    var englishWord = document.getElementById('english-word').value
    var indonesianWord = document.getElementById('indonesian-word').value
    if(englishWord.length == 0 || indonesianWord.length == 0){
        document.getElementById('update-result').textContent = "Please enter an english and indonesian word.";
    } else {
        updateDictionary(englishWord, indonesianWord)
    }
    
});

function updateDictionary(englishWord, indonesianWord){
    let json = {
        englishWords: [englishWord],
        indonesianWords: [indonesianWord]
    }
    configPost.body = JSON.stringify(json);
    fetch('http://localhost:8080/update/user', configPost)
        .then((response) => response.text())
        .then((verification) => {
            if(verification){
                document.getElementById('update-result').textContent = "The Dictionary was updated. Would you like to add another word?";
            } else {
                document.getElementById('update-result').textContent = "Word failed to update.";
            }
        });

}