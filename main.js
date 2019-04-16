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
-----------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------
//Question 3
//Write the function checkInput(x)
// taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string;
// and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
//Examples:
//checkInput(5) ====> ‘number’
//checkInput(‘hello’)======> ‘string’
//checkInput(‘5’) ======> ‘string’
//checkInput(true)=====> boolean
//checkInput([1,2,3,4]) =====> -1
//if x is a boolean,number or string
      //then we print out its type
      //otherwise we return -1


function checkInput(x) {
if(typeof x==="number"|| typeof x === "string"||typeof x ==="boolean"){
  return typeof x;
}else {
  return -1;
}
}

 ----------------------------------------------------------------------------------------------------------------     
   

//Question 4
//Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num.
//Examples: simpleEvenAdding(5)==========>6(because 2+4=6)
//          simpleEvenAdding(10)========>30(because2+4+6+8+10=30)
//          simpleEvenAdding(11)=======>30(because2+4+6+8+10=30)
//          simpleEvenAdding(1)========>0
//          simpleEvenAdding(0)=======>0


function simpleEvenAdding(num){
  //store  answer
  var solution =0;
  //loop over numbers from 1 to num
  for(var x=0;x<=num;x++){
   //check if current index is even or odd
   if(x%2===0){
     solution +=x;

   } 
  }
  return solution;
}
console.log(simpleEvenAdding(10));
-----------------------------------------------------------------------------------------------------------------------------------

//Question 5
//Write function letterCapitalize(str) taking a string and capitlize the first letter of each word.
// The given words will be separated by only one space.
//examples: 
//          letterCapitalize("hello world")============> "Hello World"
//          letterCapitalize("you cannot find the answer online")===> "You Cannot Find The Answer Online"


function letterCapitalize(str){
  //seperate the str into array of words
  var word = str.split(" ");
  //store the answer
  var solution="";

  //find the first character in each word
for (var x=0;x<words.length;x++){
var upperWord=words[x].replace(words[x][0], words[x][0].toUpperCase());
solution +=upperWord;
}

return solution.slice(1);
}
console.log(letterCapitalize("you cannot find the answer online"));

------------------------------------------------------------------------------------------------------------------------------------

//Question 6
//Write the function simpleReverse(str) taking a string and return the string in reversed order.
//Example:
//          simpleReverse("hello")=====>"olleh"
//          simpleReverse("I Love to Code")====>"edoC ot evoL I"
function simpleReverse(str){
//transfer string into arrary
var  revArray=str.split("");
//reverse array
var revArray=strArray.reverse();
//transfer array back to string
return revArray.join("");
}
console.log(simpleReverse("I Love to Code"));

-------------------------------------------------------------------------------------------------------------------------------------
//Question 7
//Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between 
//the maximum number and the minimum number(max-min). 
//Examples:
//          findDiff([1,2,4,6,20,3])======>19 (Because 20-4=19)
//          findDiff([24,22,23,22,24])====>2 (Because 24-22=2)
//          findDiff([1,1,1,1,1])=======>0
//          findDiff([1])========>0
//          findDiff([])======>0
function findDiff(arr){
//find max num
var max=Math.max(... arr);
  //find min and max array
  var min=Math.min(... arr);
  //max-min
  return max-min;
}
console.log(findDiff([1,2,3,8,9,12,15]));
------------------------------------------------------------------------------------------------------------------------------------

//Question 8
//Write the function timeConvert(num) taking a number a parameter and return the number of hours and minutes
//the parameter converts to. Seperate the number of hours and minutes with a colon.
//Examples:
//          timeConvert(61)====>1:1
//          timeConvert(63)====>1:3
//          timeConver(120)====>2:0
//          timeConvert(59)====>0:59

function TimeConvert(num) {
  //getting hours
    var hour = parseInt(num/60);
//getting mins
    var minutes = num % 60;
//answer
    return hour + ":" + minutes;
  }

  console.log(timeConvert(236));
-------------------------------------------------------------------------------------------------------------------------------------------

//Question 9
//Write the function findStr(str,long) taking two strings as parameters and return how many str you can find in long.
//Assume Str isn't an empty string.
//Example:
//          findStr("hi", "dasdhidasdahidashi")======>3
//          findStr("o", "daodo")=====>2
//          findStr("ha", "abcdef")====>0
//          findStr("h", "hihelloho")====>3
function findStr(str,long){
  var length = str.length;
  var answer= 0;
  for(var i=0;i<long.length-str.length;i++){
   if(long.slice(i,i+str.length)===str){
     answer++;
   }
  }
  return answer;
}
console.log(findStr());
/*
function findStr(str,long){
  var splitedArray=long.split(str);
  return splitedArray.length-1;
}
*/
---------------------------------------------------------------------------------------------------------------------------------------------
//Question 10
//Write the function selfDividingNumber(left,right) taking two number bound as parameters and return an array
// of every possible self dividing number between them, including the bonds.
//Examples:
//          selfDividingNumbers(1,22)======>[1,2,3,4,5,6,7,8,9,11,12,15,22]
//          selfDividingNumber(1,10)=======>[1,2,3,4,5,6,7,8,9]
//          selfDividingNumber(12,21)======>[12,15]

//var x = selfDividingNumber(left,right);
//document.selfDividingNumber("").innerHTML = x;

//function selfDividingNumver(a, b) {
  //return a / b;
function selfDividingNumbers(left, right){
  //store the answer
  var solution=[];
  //loop over from left to right
  for(var i=left;i<=right;i++){
    //if i is selfdividing
 if (/*i is selfdividing*/){
      solution.push(i);
 }
}
return solution;
}
//check if num is selfdividing
function isSelfdividing(num){
  //get digits in num
  var digits=num.toString().split("");
  //loop over digits
  for(var i=0;i<digits.length;i++){
    if(num%digits[i]!==0){return false;
    }
  }
  return true;
}
console.log(selfDividingNumbers(1,22));
------------------------------------------------------------------------------------------------------------------------------------------
//Question 11
//Write the function moveZeros(num) taking an array of numbers and move all the 0's to the end of it while
//maintaining the relative order of the non-zero elements.
//Examples:
//          moveZeros([0,1,0,3,12])======>[1,3,12,0,0]
//          moveZeros([1,2,0,0,2,312,33,0,0])====>[1,2,2,312,33,0,0,0,0]
//          moveZeros([0,0,0])======>[0,0,0]
//          moveZeros([1,2,312,11,2])=====>[1,2,312,11,2]

function moveZeros(nums){
  //count zeros
  var counter=0;
  //store answer
  var solution=[];
  //loop over nums
  for(var i=0; i<nums.length;i++){
    if(nums[i]===0){

    } else{
      solution.push(nums[i]);
    }
  }
  for (var x=counter; x>0;x--){
    
    solution.push(0);
  }
  return solution;
}
console.log(moveZeros[1,2,5,0,0,5,8,0,0,8]);
----------------------------------------------------------------------------------------------------------------------------------------
//Question 12
//Create an average() function that calculates the average of any array of numbers.
//Examples:
//          average([2,6])=====>4
//          average([2,3,3,5,7,10])====>5
//          average([7,1432,12,13,100])=====>312.8
//          average([])=========>0
function average(nums){
  if(nums.length===0){
    return 0;
  }
  //adding up all numbers
var sum=0;
for(var i=0;i<nums.length;i++){
  sum+=nums[i];
}

  //divide by length
  return sum/ nums.length
}
console.log(average)
