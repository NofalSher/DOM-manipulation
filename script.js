//Get DOM elements

const main=document.getElementById("main");
const addUserBtn=document.getElementById("add-user");
const doubleBtn=document.getElementById("double");
const filterBtn=document.getElementById("filter");
const sortBtn=document.getElementById("sort");
const sumBtn=document.getElementById("sum");

let data=[];   // Making or initializing an array where we can store all data

//Fetch randomuser.me API
// function getRandomUser(){
//     // In javascript we can also use ajax incase of fetch

//     fetch('https://randomuser.me/api/')
//     // .then(res=>res.json())
//     // .then(data=>{})           // this function  is one type of method to fetch data. Here we will use other method that is related to asynchronous
// }

// Making async function
async function getRandomUser(){   //Means this function will asynchronously execute that is will be executed in background
   const res=await fetch('https://randomuser.me/api/')  // Means function will wait for this fetch and will store it in this variable when we get response

   // Wait for response to be converted to json
   const data=await res.json();
   
//    console.log(data);

//Get UserData
const user=data.results[0];
console.log(user);

// Create New User
const newUser={
    name:`${user.name.title} ${user.name.first} ${user.name.last}`,
    balance:Math.floor(Math.random()*1000000)
}
console.log(newUser);

//Add new User in data array
addData(newUser);
}
getRandomUser();