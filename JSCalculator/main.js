while (exit != true) {
	var inputMenu = +prompt('Calculator ^_^ \n 1:Addition \n 2:Subtraction \n 3:Division \n 4:Multiplication', '');
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
