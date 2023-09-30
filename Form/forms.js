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



function checkPassword() {
    let pass = document.getElementById("pass").value;
    let confirm = document.getElementById("conPass").value;

    if (pass === confirm){
        alert("Access granted");
    } else {
        alert("Access denied");
    }
}