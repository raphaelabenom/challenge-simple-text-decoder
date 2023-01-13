// ✅ Works as expected - Variables
var textInput = document.getElementById("textInput");
var textResult = document.getElementById("textResult");
var btnEncrypt = document.getElementById("btnEncrypt");
var btnDescrypt = document.getElementById("btnDescrypt");

// Show and Hidden the result
var showResult = document.querySelector('#result-output');
showResult.classList.toggle("hidden");

var EmptyResult = document.querySelector("#empty-output")
EmptyResult.classList.toggle("hidden");


textInput.addEventListener("input", function() {
	if (textInput.value) {
		document.getElementById("empty-output").classList.add("hidden");
		document.getElementById("result-output").classList.remove("hidden");
	} else {
		document.getElementById("empty-output").classList.remove("hidden");
		document.getElementById("result-output").classList.add("hidden");
		// Clean the output text
		textResult.value = "";
	}

}
);

// Crypt
function crypt() {
	var text = textInput.value;
	return text
		.replace(/e/g, "enter")
		.replace(/i/g, "imes")
		.replace(/a/g, "ai")
		.replace(/u/g, "ufat")
		.replace(/o/g, "ober");
}

// Decrypt
function decrypt() {
	var text = textInput.value;
	return text
		.replace(/enter/g, "e")
		.replace(/imes/g, "i")
		.replace(/ai/g, "a")
		.replace(/ufat/g, "u")
		.replace(/ober/g, "o");
}

//Button Event
btnEncrypt.addEventListener("click", () => {
	textResult.value = crypt();
});

btnDescrypt.addEventListener("click", () => {
	textResult.value = decrypt();
});

// Function to copy the text
function copy() {
	let copyText = document.querySelector("#textResult");
	copyText.select();
	document.execCommand("copy");
}

document.querySelector(".copy-result").addEventListener("click", copy);

// var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar

// function ocultar() {
//   if (textResult.value == "")
//     document.getElementById("empty-output").style.display = "none";
// }
