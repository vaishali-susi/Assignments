let r = document.getElementById("radius");
let h = document.getElementById("height");
let volBtn = document.getElementById("volume");
let areaBtn = document.getElementById("area");
let result = document.getElementById("result");
const pi = 3.14
volBtn.addEventListener("click", () =>{
var res = pi*r.value*r.value*h.value;
result.innerText = res;
})
areaBtn.addEventListener("click", ()=>{
var res = 2 * pi * r.value * (r.value+h.value)
result.innerText = res;
})

let current = document.getElementById("current");
let voltage = document.getElementById("voltage");
let powBtn = document.getElementById("pow");
let resultant = document.getElementById("resultant")
powBtn.addEventListener("click",()=>{
var Pow = current.value * voltage.value;
resultant.innerText = Pow;
})

let a = document.getElementById("a");
let width = document.getElementById("w");
let height = document.getElementById("h");
let calBtn = document.getElementById("cal");
let ans = document.getElementById("answer");
calBtn.addEventListener("click",()=>{
    let area = width.value * height.value;
    let brick = area/a.value;
    ans.innerText = brick;
})