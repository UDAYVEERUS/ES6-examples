let arr = [1,2,3,4]

arr.forEach((el)=>{
  console.log("Ele :",el)
})

let arr = [3,4,5,6,7,8,9];

arr.forEach((uday)=>{
  console.log("Ele :",uday);
})

let arr = [9,6,4,7,3,1,5,6];
arr.forEach((ele)=>{
  console.log("Aray: ",ele);
// })
let str = "udayveer";
for(let x of str){
  console.log("X:",x)
}

var str = "deepak";

for(let myName of str){
  console.log("myName:",myName);
}

let str = "satendra";
for(let x of str){
  console.log("x:",x)
}
const user = {
  name: 'uday',
  age: 22,
  city: "delhi"
}
let {name , age , city} = user;
console.log("All details in aone statement", name,age,city)
let {name , age} = user;
console.log("name", name)
console.log("age", age)

let {name , age} = user;
console.log('name:',name,city)

fetch('http://reqres.in/api/users/2')
.then((res)=>{
  return res.json()
    .then((res)=>{
    let data = res.data;
      let {first_name,email} = data
      console.log("email:",email)
      console.log("first_name:",first_name)
  })
})

const user = {
  name: "uday",
  age:22,
  city:"jahnsi"
}

function printValue(val){
  console.log(val.name,val.age,val.city)
}
printValue(user)

console.log(colors2)

console.log(...colors2,"red","yelloow","white")

var arr1 = [1,2,3,4,5]
var arr2 = [5,6,7,8];

console.log(...arr2,1,2,3,4,5)
const user1 = {
  name:"udayveer"
}
const city1 = {
  city:"jhansi"
}
const details = {...user1,...city1}
console.log(details)

var arr = {
  num:[1,2,3]
}
var arr1 = {
  num1:[5,6,7]
}
const arrays = [...arr,...arr1]
console.log(arrays)


let colors1 = ["red","yelloow","white"]

let colors2 =[...colors1,"violet","pink","black"];

const user = {
  name:"udayveer",
  age:22,
  city:"delhi",
  mobile:99999,
  gender:"male"
}
const {mobile,name, ...x} = user
console.log("x:",x)

function printArray(...a){
  let sum = 0;
  for(let num of a){
    sum = sum+num;
  }
  console.log("sum:",sum);
}
// printArray(10,20,30,50,240,289,298,277,267,287)
function sumOf(...a){
  let sum = 0;
  for(let num of a){
    sum = sum+num;
  }
  console.log("sum: ",sum)
}
sumOf(29,20,27,28,26,24)