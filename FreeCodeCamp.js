FreeCodeCamp.js

//Return the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
var factorial = 1;
  for (var n = 2; n<= num; n++) {
    factorial = factorial * n;
  }
    return factorial;
}

factorialize(5);



//Palindrome


//Understanding this code:
/\W|_g;
//Source: https://stackoverflow.com/questions/35324229/how-to-interpret-this-regular-expression-w-g
/ ... /g It's a global regex. So it'll operate on multiple matches in the string.
[ ... ] This creates a character set. Basically it'll match any single character within the listed set of char


function palindrome(str) {
	var symbols = /\W|_/g;
	str = str.replace(symbols,""),toLowerCase();
	var palindromic = str.replace(symbols,"").to lowerCase().split("").reverse("").join("");
	return Boolean(str === palindromic):
	return Boolean
}