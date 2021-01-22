var numbers =[45,65,78,12,3,54,65];

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum= sum + element;
    
}
console.log("total of the numbers : ",sum);


//function

function getArraySum(numbers){
    var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum= sum + element;
    
}
return sum;
}
var numbers =[45,65,78,12,3,54,65];
var result =getArraySum(numbers);
console.log("total of the numbers : ",sum);

var total =getArraySum([45,56,65,35,89]);
console.log("total of the numbers : ",total);