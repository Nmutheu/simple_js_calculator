
function add() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let res = a + b
	document.getElementById('result').innerHTML=res;
}

function subtract() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let res = a - b
	document.getElementById('result').innerHTML=res;
}
function multiply() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let res = a * b
	document.getElementById('result').innerHTML=res;
}
function divide() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let res = a / b
	document.getElementById('result').innerHTML=res;
}