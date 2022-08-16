// Chapter 3 
/*a. Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/
const prntTr = function(a,b)
{
  let t=a+"";
  console.log(a);
for(let x=0;x<b;x++)
{
   
 a=a.concat(t);
 console.log(a); // acts like,"\n");
  
}
}

console.log(prntTr('#',7));

console.log(prntTr('*',9));

//b.
/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
function FizzBuzz35(e) {
 for(let i=0;i<e;i++){
    if((i%3===0)&&(i%5===0))
       console.log(i,"FizzBuzz");
   else{
 if((i%3===0)&&(!i%5===0))
	 console.log(i,"Fizz");
 if((i%5===0)&&(!i%3===0))
	 console.log(i,"Buzz");
   }}
}

console.log(FizzBuzz35(100));
 
 
//c.Write a program that creates a string that represents an 8×8 grid like chesssboard,

function ChessBoard(e) {
  let s="";
 for(  let i=0;i<8;i++,s="")
 {
   for(  let j=0;j<8;j++)
   {
   if(i%2==0)
    {
       if(j%2==0)
         s=s.concat(' ');
       else
         s=s.concat(e);
    }
    else
    {
         if(j%2===0)
            s=s.concat(e);
         else
            s=s.concat(' ');
    }
    }
 console.log(s);
 }
}
console.log(ChessBoard('■'));
