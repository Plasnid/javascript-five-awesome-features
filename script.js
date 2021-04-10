//! nullish coalessing

function addTwo(num1, num2){
    num1 = num1 ?? 0; // * nullish coalessing with ??
    num2 = num2 ?? 0;
    return num1 + num2;
}
console.log(addTwo(1,2))
console.log(addTwo(null,1));

//! css styling console.log
console.log(`%cI like cheese %cIt is yummy`, "background-color:red", "background-color:orange;color:green;");


//! optional chaining ?.
class Person{
    constructor(p_name, p_address){
        this.p_name = p_name;
        this.p_address = p_address;
    }
}
function personNameStreet(person){
    console.log(person?.p_address?.street);
}
const stu = new Person("Stu",{street:"borkington lane", st_num:77});
const fred = new Person("Fred",{street:undefined, st_num:77});
personNameStreet(stu);
personNameStreet(fred);

//!  adding key and value with a single term
let numArms = 5;
let numEyes = 1;

let myAlien = {
    numArms,
    numEyes
}
console.log(myAlien);

//! the defer on the script tag in the html keeps the script working even though it is higher up on the page
const btn = document.querySelector("button");
btn.style.backgroundColor = "green";