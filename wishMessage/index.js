
let text = document.getElementById("text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


btn1.addEventListener("click", function(){
    text.innerText = "good morning";
});

btn2.addEventListener("click", function(){
    text.innerText = "good Afternoon";
});

btn3.addEventListener("click", function(){
    text.innerText = "good Night";
});
