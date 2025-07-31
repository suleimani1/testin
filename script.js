console.log("Hello from script.js!");

const name = "suleimani";
const age = 21;
const isStudent= true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is a Student?", isStudent);

let info = `My name is ${name} and I am ${age} years old.`;
console.log("Some info about me:", info);

const favNum1 = 12;
const favNum2 = 23;
let sum = favNum1 + favNum2;
console.log("Sum of two numbers:", sum);

const product = favNum1 * favNum2;
console.log("Product of two numbers:", product);

const userProfile = {
    username: "suleimani",
    age: 21,
    isLoggedIn: true,
    skills: ["HTML", "CSS", "JavaScript"]
}
console.log("Username:", userProfile.username);
console.log("My second skill from the list is:", userProfile.skills[1]);

function displayWelcomeMessage(user) {
    console.log(`Welcome ${user} Glad to have you here`);
}
displayWelcomeMessage(userProfile);

function checkLoginStatus(profile){
    if(profile.isLoggedIn){
        console.log("User is currently logged in");
    }
    else {
        console.log("User is not logged in");
    }
}

const statusMessage = checkLoginStatus(userProfile);
console.log(statusMessage);

// comment