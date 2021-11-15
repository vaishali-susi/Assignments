
var count = 0;
function checkPrime(a){
    for(let i=2;i<a;i++){
        if(a%i==0){
        count++;
        break;
        }
    }
    if(count==0){
        console.log("the no is prime")
    }else{
        console.log("the no is not prime")
    }

}

checkPrime(5)