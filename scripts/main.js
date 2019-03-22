var displayedImage = document.querySelector('img');


displayedImage.onclick = function () {
    var currentImage = displayedImage.getAttribute('src');

    if (currentImage == "images/firefox-logo.png") {
        displayedImage.setAttribute('src', 'images/mozilla-2.jpg');
    } else {
        displayedImage.setAttribute('src', 'images/firefox-logo.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}