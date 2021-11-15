let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    if(input.value == "")
    btn.innerText = "Hide/Show password";
    else if(input.type=="password"){
        input.type = "text";
        btn.innerText = "Show Password";
    }else{
        input.type = "password";
        btn.innerText  = "Hide Password"
    }
})