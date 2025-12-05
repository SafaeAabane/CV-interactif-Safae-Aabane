const text = "Étudiante en Informatique Appliquée";
const speed = 100; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (i > 0) {
    document.getElementById("typing-text").innerHTML = text.substring(0, i - 1);
    i--;
    setTimeout(eraseText, speed);
  } else {
    setTimeout(typeWriter, 1000);
  }
}

typeWriter();
