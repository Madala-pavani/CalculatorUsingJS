const add = () => {
    event.preventDefault();
    let val1 = document.getElementById("value1").value
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display");
    display.innerHTML = `The sum of ${val1} and ${val2.value} is ${parseInt(val1) + parseInt(val2.value)}`;
}
const subtract = () => {
    
    event.preventDefault();
    let val1=document.getElementById("value1").value
    let val2=document.getElementById("value2")
    let display=document.getElementById("display");
    display.innerHTML=`The difference of ${val1} and ${val2.value} is ${parseInt(val1) - parseInt(val2.value)}`;
}
const multiply = () => {
    event.preventDefault();
    let val1=document.getElementById("value1").value    
    let val2=document.getElementById("value2")
    let display=document.getElementById("display");
    display.innerHTML=`The product of ${val1} and ${val2.value} is ${parseInt(val1) * parseInt(val2.value)}`;
}
const divide = () => {
    event.preventDefault();
    let val1=document.getElementById("value1").value
    let val2=document.getElementById("value2")
    let display=document.getElementById("display");
    display.innerHTML=`The quotient of ${val1} and ${val2.value} is ${parseInt(val1) / parseInt(val2.value)}`;
}
const modulus = () => {
    event.preventDefault();
    let val1=document.getElementById("value1").value
    let val2=document.getElementById("value2")          
    let display=document.getElementById("display");
    display.innerHTML=`The modulus of ${val1} and ${val2.value} is ${parseInt(val1) % parseInt(val2.value)}`;
}
const pow = () => {
    event.preventDefault();
    let val1 = document.getElementById("value1").value;
    let val2 = document.getElementById("value2");
    let display = document.getElementById("display");
    display.innerHTML =`The Power of ${val1} and ${val2.value} is ${Math.pow(parseInt(val1), parseInt(val2.value))}`;
}

