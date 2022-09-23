const query = document.querySelector('.query');
const searchButton = document.querySelector('.searchButton');
const happyButton = document.querySelector('.happyButton');


searchButton.onclick = function() {
    const url = 'https://www.google.com/search?q='+query.value;
    window.open(url, '_self');
}

happyButton.onclick = function() {
    const image = document.querySelector('img');
    image.setAttribute('src', '../img/il-makiage.png');
}