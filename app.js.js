const numbers = [
  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

let arr2 =[]
// to find prime number 
for (let i = 0; i < numbers.length; i++) {
  let count = 0;

  for (let j = 1; j <= numbers[i]; j++) {
    if (numbers[i] % j == 0) {
      count++;
    }
  }

  if (count < 3) {
    arr2.push(numbers[i])
    console.log(`${numbers[i]} is a prime number `);
  }
}



const findSum = (arr)=>{
    let sum=0;
    for (let i=0;i<arr2.length;i++){
        sum+=arr[i]
    }

    console.log(`sum of all the prime number is ${sum}`)
}

findSum(arr2)