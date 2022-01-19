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


//Add new User in data array
addData(newUser);
};

//Function to add user data into array
function addData(newUser){
data.push(newUser);   // Push method used to push data in array.

// Updata DOM to display users in data array
updateDOM();

}

function updateDOM(userData=data){
    // Clear Previous UI
    main.innerHTML='<h2><strong>User</strong> Wealth</h2>'

    //Loop through user data and render that in UI
    userData.forEach(user=>{       // forEach will perform some task for every index of an array
       const userDiv=document.createElement('div');
        userDiv.classList.add('user');
        //Add inner HTML to user div
        userDiv.innerHTML=`<strong>${user.name}</strong> ${user.balance}`

        //Add the new element into DOM
        main.appendChild(userDiv)
    });   
}

getRandomUser();
