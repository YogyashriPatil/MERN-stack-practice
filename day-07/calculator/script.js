const btn1=document.getElementById('btn-1');
const btn2=document.getElementById('btn-2');
const btn3=document.getElementById('btn-3');
const btn4=document.getElementById('btn-4');
const btn5=document.getElementById('btn-5');
const btn6=document.getElementById('btn-6');
const btn7=document.getElementById('btn-7');
const btn8=document.getElementById('btn-8');
const btn9=document.getElementById('btn-9');
const btn0=document.getElementById('btn-0');
const del=document.getElementById('del-btn');
let input1=document.getElementById('input1');
let value1="";

del.addEventListener('click', () => {
    input1.value="";
})
btn1.addEventListener('click', () => {
    input1.textContent="1"
    console.log(value1);
})


btn2.addEventListener('click', () => {
    value1="2"
    console.log(value1);
})
btn3.addEventListener('click', () => {
    value1="3"
    console.log(value1);
})
btn4.addEventListener('click', () => {
    value1="4"
    console.log(value1);
})
btn5.addEventListener('click', () => {
    value1="5"
    console.log(value1);
})
btn6.addEventListener('click', () => {
    value1="6"
    console.log(value1);
})
btn7.addEventListener('click', () => {
    value1="7"
    console.log(value1);
})
btn8.addEventListener('click', () => {
    value1="8"
    console.log(value1);
})
btn9.addEventListener('click', () => {
    value1="9"
    console.log(value1);
})

btn0.addEventListener('click', () => {
    value1="0"
    console.log(value1);
})