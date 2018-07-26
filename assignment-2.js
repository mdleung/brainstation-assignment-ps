var text = '';

var x = 0;

for (var i = 0; i < 7; i++) {
  

	while (x < i) {

		text += "#";

		x++;

	}	
x = 0;

 text += "\n";

}

console.log(text);


/*
for loop: prints a new line after while loop finishes, and resets x counter

while loop: continuously prints "#" while x < i

x++: increments the x variable

finally prints variable to console

*/

// Challenge 2





function isEven(number) {
  
	if ( (number % 2 ) == 0) {

		console.log( "number is even" );

	} else {

		console.log ( "number is odd");

	}



}

isEven(5);

/*
If remainder of number is 0, then even, otherwise the numebr is odd
The way my code is written, is that if not a number, then "number is odd" will be output
*/