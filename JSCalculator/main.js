while (exit != true) {
	var inputMenu = +prompt('Calculator ^_^ \n 1:Addition \n 2:Subtraction \n 3:Division \n 4:Multiplication \n 5:Exponentiation \n 6:Convert into binary \n 7:Sqare of number', '');
	switch (inputMenu) {

		case 1:
			var a = +prompt('Type a', '');
			var b = +prompt('Type b', '');
			alert(additionNumber(a, b));
			break;

		case 2:
			var a = +prompt('Type a', '');
			var b = +prompt('Type b', '');
			alert(substrNumber(a, b));
			break;

		case 3:
			var a = +prompt('Type a', '');
			var b = +prompt('Type b', '');
			alert(divisionNumber(a, b));
			break;

		case 4:
			var a = +prompt('Type a', '');
			var b = +prompt('Type b', '');
			alert(multiplyNumber(a, b));
			break;

		case 5:
			var x = +prompt('Type x', '');
			var n = +prompt('Type n', '');
			alert(expNumber(x, n));
			break;

		case 6:
			var a = +prompt('Type a', '');
			alert(convertBinary(a));
			break;

		case 7:
			var a = +prompt('Type a', '');
			alert(sqareNumber(a));
			break;

		default:

			var exit = confirm('Want to get out?');

	}

}


function additionNumber(a, b) {
	return a + b;

}

function substrNumber(a, b) {

	return a - b;
}

function divisionNumber(a, b) {

	return a / b;
}

function multiplyNumber(a, b) {

	return a * b;
}

function expNumber(x, n) {

	return Math.pow(x, n);
}

function convertBinary(a) {

	return a.toString(2);
}

function sqareNumber(a) {

	return Math.sqrt(a);
}
