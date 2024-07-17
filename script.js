let decodeButton = document.getElementById("decodeButton");
decodeButton.addEventListener("click", handleDecode);

function handleDecode(){
  let inputField = document.getElementById("encodedInput");
  let messageToDecod = inputField.value;
  let numbersDecodedMsg = translateNumbers(messageToDecode);

  let decodedElement = document.getElementById("decodedOutput");
  decodedElement.innerText = numbersDecodedMsg;
} 

function translateNumbers(encodedMessage) {

  for (var i = 0; i < encodedMessage.length; i++) {
    if (encodedMessage.charAt(i) == "3"){
      encodedMessage = encodedMessage.replace("3", "w");
    } else if (encodedMEssage.charAt(i) == "7") {
      encodedMessage = encodedMessage.replace("7", "l");
    }
    return encodedMessage
  }
}
//   console.log("Encoded Message: " + encodedMessage);
    
//   console.log("charAt: 0" + encodedMessage.charAt(0));
//   console.log("charAt: 1" + encodedMessage.charAt(1));
//   console.log("charAt: 5" + encodedMessage.charAt(5));
// }
}

// translateNumbers("vhfuh3v hqfubs3lrq xqorfnv Frg7qj");

// console.log("Button: " + decodeButton);
// console.log("Button text content: " + decodeButton.textContent);
// console.log("Button inner html: " + decodeButton.innerHTML);
// console.log("Button inner text: " + decodeButton.innerText);

// Message to decode
// vhfuh3v hqfubs3lrq xqorfnv Frg7qj