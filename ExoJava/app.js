function addition (a, b) {
	return a + b;
}
console.log(addition(2, 4));


function substraction (a, b) {
	return a - b;
}
console.log(substraction(5, 1));

function multiplication (a, b) {
	return a * b;
}
console.log(multiplication(5, 3));

//Si b > 0 console.log affichera le résultat de la division.
//Si b =< 0 console.log affichera "Can't divide by 0".

function division(a, b) {
	if (b > 0) {
		return a / b;
	}else{
		console.log(division("Can't divide by 0"))
	}
}
console.log(division(4, 2));


