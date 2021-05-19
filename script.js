let number = +prompt("Enter a number", "");
let sum = 0;

while(number !== 0){
	sum = sum + number;
	number = +prompt("Enter a number", "");
}
console.log(sum);