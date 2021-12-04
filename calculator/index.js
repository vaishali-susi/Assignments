let display  = document.querySelector(".display");
let text = document.querySelector("#input");
let keypad = document.querySelector(".keypad");
 let buttons = document.querySelectorAll("button");
 buttons.forEach((e)=>{
     e.addEventListener("click", function (){
         text.value += e.innerText;
         let result = eval(text.value);
     })

 })

