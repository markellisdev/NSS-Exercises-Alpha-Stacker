// Create an array that contains the letters of the alphabet

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Is there a way to use this???
//var alphabet = ["abcdefghijklmnopqrstuvwxyz".split("")];

var x = 0

//Find length of array to use in FOR LOOP
var alphaLen = alphabet.length;

//Working FOR loop for writing out alphabet + line break

for (x = 0; x < alphaLen; x++) {
//if statement to print only 3 letters before line break
console.log("modulous", "x=", x, x % 2);	
	if ((x % 2) === 1) {
		console.log("If statement x=", x, x % 3);
	document.write("<br>" + alphabet[x]);
}

else {
	console.log("else statement x=", x);
	document.write(alphabet[x]);
}
//	document.write(alphabet[x++] + "<br>");
}



// The stackLetter function should accept the array as the sole argument
/*function stackLetters (theAlphabetArray) {

      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     
}*/


// Invoke the function and pass in the array
// stackLetters(alphabet)

/*

function stackLetters (theAlphabetArray) {
 	for (let n = 0; n < 26; n++) { 
    	theAlphabetArray += alphabet[n] + "<br>";
	}    
}
*/


//(stackLetters(0, 26));