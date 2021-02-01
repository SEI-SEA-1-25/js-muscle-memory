/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
  // initialize an empty array
  const output = []

  // loop through the incoming array
    // use the index to access the elements inside the incoming array
  
    // incoming array: [4, 1, 7]

  for (let i = 0; i < array.lengh; i++) {
    // console.log(array[i])
    // console.log(array[i] * 3);
    const tripled = array[i] * 3
    output.push(tripled)

    // output.push(array[i] * 3)

    // output[i] = array[i] * 3
  }

  // for (let i in array) {
  //   console.log(i); // 0, 1, 2, 3...
  // }

  // for (let i of array) {
  //   console.log(i); // 3, 1, 7....
  // }


  // on each element in the incoming array, multiply it by 3
  // push the tripled numbers into the output

  // return the no-longer-empty array
  return output
}


//count from 20 to 100 in multiples of 5

for (let i = 20; i <= 100; i + 5) {
  console.log(i);
}

let i = 20

i = i + 5

console.log(i)




let myVar = 19

myVar += 2
myVar = myVar + 2


myVar -= 2
myVar = myVar - 2

myVar *= 2
myVar = myVar * 2





