

let arr=[1,2,3,4,5,6,7,8,9,10]
let evensum=0;
let oddsum=0;
for(let i=0;i<=arr.length;i++){
    if(i%2==0){
        evensum+=i;
    }
    else{
        oddsum+=i;
    }
}

console.log(`sum of even numbers= ${evensum}`)
console.log(`sum of odd numbers= ${oddsum}`)