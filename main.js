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
// Also tried
checkInput(x)

  if (undefined) {
  console.log - 1;

  } else if typeof("hello");

     console.log ("string");
{

  } else if   checkInput(blubbler) {
     console.log("number");

  } else if  checkInput(x)
   { console.log ("string");

     { else if checkInput(true) {
     console.log ("boolean");
  } else if
     }

   if(...||...||...) {
      return typeof x;
      //if x is a boolean,number or string
      //then we print out its type
      //otherwise we return -1

   }
   console.log(checkInput(1,2,3)){
      // loop over numbers from 1 to num
      for(...;...for;...) {

      }
   }

//Question 4
//Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num.
//Examples: simpleEvenAdding(5)==========>6(because 2+4=6)
//          simpleEvenAdding(10)========>30(because2+4+6+8+10=30)
//          simpleEvenAdding(11)=======>30(because2+4+6+8+10=30)
//          simpleEvenAdding(1)========>0
//          simpleEvenAdding(0)=======>0




//Question 5
//Write function letterCapitalize(str) taking a string and capitlize the first letter of each word.
// The given words will be separated by only one space.
//examples: 
//          letterCapitalize("hello world")============> "Hello World"
//          letterCapitalize("you cannot find the answer online")===> "You Cannot Find The Answer Online"
function LetterCapitalize(str) {

    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  
      return arr.join(" ");
    }
  
  
  
  
  
  {
     int maxDiff(int arr[], int arr_size)
     {
         int max_diff = arr[1] - arr[0];
         int i, j;
         for (i = 0; i < arr_size; i++)
         {
             for (j = i + 1; j < arr_size; j++)
             {
                 if (arr[j] - arr[i] > max_diff)
                     max_diff = arr[j] - arr[i];
             }
         }
         return max_diff;




//Question 6
//Write the function simpleReverse(str) taking a string and return the string in reversed order.
//Example:
//          simpleReverse("hello")=====>"olleh"
//          simpleReverse("I Love to Code")====>"edoC ot evoL I"




//Question 7
//Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between 
//the maximum number and the minimum number(max-min). 
//Examples:
//          findDiff([1,2,4,6,20,3])======>19 (Because 20-4=19)
//          findDiff([24,22,23,22,24])====>2 (Because 24-22=2)
//          findDiff([1,1,1,1,1])=======>0
//          findDiff([1])========>0
//          findDiff([])======>0



//Question 8
//Write the function timeConvert(num) taking a number a parameter and return the number of hours and minutes
//the parameter converts to. Seperate the number of hours and minutes with a colon.
//Examples:
//          timeConvert(61)====>1:1
//          timeConvert(63)====>1:3
//          timeConver(120)====>2:0
//          timeConvert(59)====>0:59

function TimeConvert(num) {


    var hour = Math.floor(num/60);

    var minutes = num % 60;

    return `${hour}:${minutes}`;
  }

  TimeConvert(124);


//Question 9
//Write the function findStr(str,long) taking two strings as parameters and return how many str you can find in long.
//Assume Str isn't an empty string.
//Example:
//          findStr("hi", "dasdhidasdahidashi")======>3
//          findStr("o", "daodo")=====>2
//          findStr("ha", "abcdef")====>0
//          findStr("h", "hihelloho")====>3



//Question 10
//Write the function selfDividingNumber(left,right) taking two number bound as parameters and return an array
// of every possible self dividing number between them, including the bonds.
//Examples:
//          selfDividingNumbers(1,22)======>[1,2,3,4,5,6,7,8,9,11,12,15,22]
//          selfDividingNumber(1,10)=======>[1,2,3,4,5,6,7,8,9]
//          selfDividingNumber(12,21)======>[12,15]


//Question 11
//Write the function moveZeros(num) taking an array of numbers and move all the 0's to the end of it while
//maintaining the relative order of the non-zero elements.
//Examples:
//          moveZeros([0,1,0,3,12])======>[1,3,12,0,0]
//          moveZeros([1,2,0,0,2,312,33,0,0])====>[1,2,2,312,33,0,0,0,0]
//          moveZeros([0,0,0])======>[0,0,0]
//          moveZeros([1,2,312,11,2])=====>[1,2,312,11,2]



//Question 12
//Create an average() function that calculates the average of any array of numbers.
//Examples:
//          average([2,6])=====>4
//          average([2,3,3,5,7,10])====>5
//          average([7,1432,12,13,100])=====>312.8
//          average([])=========>0