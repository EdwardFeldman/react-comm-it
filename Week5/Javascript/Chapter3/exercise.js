// Chapter 3 
//a.Write a function min that takes two arguments and returns their minimum
const smallestArg = function(a,b) {
  return a<b?a:b;
};
console.log(smallestArg(-3,4));

console.log(smallestArg(503,224));

//b.Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number)

//and returns string
function isEven(e) {
  if(e%1>0) 
    return "error! input must be any whole number";
   if (isNaN(e))
    return "error! input must be any whole number";
  if(e<0)
    e= Math.abs(e);
  if(e===1)
    return "is odd";
  if (e === 0) {
    return "is even";
  } else {
    e=e-2;
    return isEven(e)
 
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(-12));
console.log(isEven(-2.3));

//c. Write a function countBs that takes a string as its only argument and returns 
//a number that indicates how many uppercase “B” characters there are in the string.

const countBs = function(mystring) {
  let counter=0;
  let i=0;
  console.log(i);
    console.log(mystring[i]);
  for(let i=0;i<mystring.length;i++){
    
    if(mystring[i]=='B')
      counter=counter+1;
  }
  return counter;
};
/* const countChar = function(mystring,a) {
return countBs(s);
  }
  
};
console.log(countChar("kakkerlak", "k"));
// → 4
*/
console.log(countBs("BbSSSbbBBSBC"));
// → 2




