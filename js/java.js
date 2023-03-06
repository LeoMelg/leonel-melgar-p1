var user="Leo";
var salutation="Good Evening! ";
var greeting = salutation+"My name is " + user +" and this is my website and midterm assingment.";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var five=5,
    fiveEl = document.getElementById('five');
var ten=10,
    tenEl = document.getElementById('ten');
var twenty=20,
    twentyEl = document.getElementById('twenty');
var fifty=50,
    fiftyEl = document.getElementById('fifty');
var custom="Custom";
    customEL = document.getElementById('custom');

fiveEl.textContent = five;
tenEl.textContent = ten;
twentyEl.textContent = twenty;
fiftyEl.textContent = fifty;
customEL.textContent = custom;