// Chapter 4 
//a.Write a function sum that takes other function with two arguments as range and returns their sum
 const range = function(a,b,step) {
  let arr=[a,b,step];
  return arr;
};


const sum = function(a) {
  let sum=0;
  let s=(a[2]!=null)?a[2]:1;
  for(let x=a[0];x<=a[1];x+=x*s)
        sum=sum+x;
  return sum;
};

console.log(sum(range(1, 10,1)));

//b.Define function that produces a new array that has the same elements in the inverse order

 
function reverseArr(e) {
     return e.reverse();
  }

console.log( reverseArr([1,3,5]));
console.log( reverseArr(['C','B','A']));
 


//c. Write a function arrayToList that builds up a list structure like the one
//shown when given [1, 2, 3] as argument. Also write a listToArray
//function that produces an array from a list.

const arrayToList = function(arr) {
	let mylist={value:arr[i].[0],rest:arr[i].[1]};
	for(let i=0;i<arr.length;i++)
		mylist.Add(arr[i]);
	return mylist;
}
const arrayToList = function(mylist) {
	let arr=[];
	let i=0;
	for (const item in mylist)
	{	
	arr.indexOf(i)=item;
	i++;
	}
	return arr;
}

const listToArray = function(mylist) {
	let arr=[];
	let i=0;
	for (let item in mylist)
	{	
     //  console.log(item.date);
	arr[i]=item.value;
	i++;
	}
	return arr;
}
 
let mylist=[
    { date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 }
];
console.log(listToArray(mylist));



