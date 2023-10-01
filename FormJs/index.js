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







// let btnFunc = document.querySelector("#butn")


// Define the checkPasswords function
// function operation (){
//     let pas = document.querySelector("#pass").value
//     let conPas = document.querySelector("#conPass").value


//     if(pas === conPas) {
//         alert("Access Granted")
//     } else{
//         alert("Access Denied")
//     }

// }





// Get the button element using querySelector
let button = document.querySelector("#butnFunc");


// Attach the checkPasswords function to the button click event using addEventListener
button.addEventListener("click", checkPasswords);

// Define the checkPasswords function
function checkPasswords() {
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("conPass").value;

    if (password === confirmPassword) {
        alert("Access Granted!, Gbayi");
    } else {
        alert("Access Denied!, Comot for here!!.");
    }
}


