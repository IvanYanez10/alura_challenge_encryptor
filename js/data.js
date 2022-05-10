var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

document.addEventListener("DOMContentLoaded", function () {
  var shifter_num = document.getElementById("shifter-num");
  var n = Math.floor(Math.random() * (9 - 3)) + 3;
  shift(n);
  shifter_num.innerHTML = n;
});

document.getElementById("encryptBtn")
.addEventListener("click", function (event) {  
    var textInput = document.getElementById("toEncryptData");
    event.preventDefault();
    if(textInput.value!=null){
      var endTxt = encode(textInput.value);
      display(endTxt);
    }    
  }
);

document.getElementById("decryptBtn")
.addEventListener("click", function (event) {
    var textInput = document.getElementById("toEncryptData");
    event.preventDefault();
    if (textInput.value != null) {
      var decTxt = decode(textInput.value);
      display(decTxt);
    } 
  }
);

document.getElementById("copyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var copyBtn = document.querySelector("#copyBtn");
    var copyTxt = document.getElementById("resultData").textContent;
    navigator.clipboard.writeText(copyTxt);
    copyBtn.innerHTML = "¡Copiado!";
  }
);

function display(message) {  
  document.getElementById("no-data-result")
  .setAttribute('class', 'hidden');  
  document.getElementById("resultsScreen")
    .classList.remove("hidden");
  document.getElementById("resultData")
    .innerHTML = message;
};

function shift(n) {  
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newalpha += alphabet[offset];
  }  
}

function encode(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i]);
    result += newalpha[index];
  }
  return result;
}

function decode(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let index = newalpha.indexOf(message[i]);
    result += alphabet[index];
  }
  return result;
}