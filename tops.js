
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
const text = "How can we help you ?";
const textElement = document.getElementById("text");
let charIndex = 0;

function printCharacter() {
if (charIndex < text.length) {
textElement.textContent += text[charIndex];
charIndex++;
setTimeout(printCharacter, 100); // adjust speed (100ms = 10 chars/s)
}
}

printCharacter();