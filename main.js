//Question 1
// Write the function printInt(n) 
//taking one parameter n and print all natural numbers
//from 1 to n in console.
function printInt(n){
    // Using a loop print from 1 to n
    //start:1
   // var i=1;
    //stop:n
//    while(i <=n){
 //       console.log(i)
 //       step:+1 
  //      i++;
 //   }
 for(var x=1; x<=n;x++){
     console.log(x);
 }
}
printInt(10);

//Question 2
//Write the function printIntRev(n) 
//taking one parameter n and  print all natural numbers
// in reverse in console (from n to 1).
function printIntRev(n){
   for(var x=n; x>=1;x--){
   console.log(x);
    }
}
   printIntRev(10);

//Question 3
//Write the function checkInput(x)
// taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
//Examples:
//checkInput(5) ====> ‘number’
//checkInput(‘hello’)======> ‘string’
//checkInput(‘5’) ======> ‘string’
//checkInput(true)=====> boolean
//checkInput([1,2,3,4]) =====> -1

function checkInput(x) {
    return typeof x;
    if(x === undefined){
        console.log ("-1");
    }else if (typeof x);
    }
}
console.log (checkInput(5));





























