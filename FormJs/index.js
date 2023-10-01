function addNum (num1, num2) {
    const sum = num1 + num2;
console.log(sum)
}

addNum(5, 6)

function greetUser(name) {
    
    console.log("Hello, " + name );
}

greetUser("Oluwaseun");


function doubleNumber(number){
    return number*2;
}


let num = 3
let doublenum = doubleNumber(num)
console.log("the double of " + num + " is " + doublenum )



// function checkPassword() {
//     let pass = document.getElementById("pass").value;
//     let confirm = document.getElementById("conPass").value;

//     if (pass === confirm){
//         alert("Access granted");
//     } else {
//         alert("Access denied");
//     }
// }







var button = document.getElementById("butnFunc");

button.addEventListener("click", printValues);

function checkPasswords() {
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("conPass").value;
    if (password === confirmPassword) {
       alert("Access Granted!, Gbayi")
       return true;
    } else {
        alert("Access Denied!, comot for here");
        return false;
    }
}

function printValues() {
    // Get input values
    var fullName = document.querySelector('input[placeholder="Full Name"]').value;
    var Email = document.querySelector('input[placeholder="Email Address"]').value;
    var mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("conPass").value;
    var messageDiv = document.getElementById("message");


 

    // Check password 
       if (!fullName) {
        alert("Please Full Name is required.");
    } else if (!Email) {
        alert("Please Email Address is required.");
    } else if (!mobileNumber) {
        alert("Please Mobile Number is required.");
    } else if (!password || !confirmPassword) {
        alert("Please Passwords are required.");
    }
    
    // Check Values 
    
    else if (checkPasswords()) {
        let newtxt = document.createElement("h3");    
        newtxt.textContent = "Full Name: " + fullName + ", " + "Email: " + Email + ", " + "Mobile Number: " + mobileNumber ;
        messageDiv.appendChild(newtxt);
        
        newtxt.style.color = "white";
        newtxt.style.fontFamily = "poppins";
        newtxt.style.fontSize = "2rem";
        newtxt.style.alignItems = "center";
        console.log(newtxt);
    } 
}
