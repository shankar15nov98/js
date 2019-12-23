
table = document.querySelector("#table");
factorial = document.querySelector("#factorial");
reverse = document.querySelector("#reverse");
palindrome = document.querySelector("#palindrome");

res = document.querySelector("#res");

function reverseOfNumber(num){
    let rev = 0;
    while(num != 0){
        rev  = rev * 10 + num % 10;
        num = Number.parseInt(num / 10);
    }
    return rev;
}

table.addEventListener('click',()=>{
    number = document.querySelector("#num").value;
    str = ""
    for(let i = 1; i <= 10; i++){
        str += `${number} * ${i} = ${number*i}<br>`
    }
    res.innerHTML = str;
})

factorial.addEventListener('click',()=>{
  
    number = Number(document.querySelector("#num").value);
    
    let result = 1;
    for(let i = 2; i<=number; i++){
        result *= i;
    }

    res.innerHTML = `${number} factorial is ${result}`;   
})


reverse.addEventListener('click',()=>{
    number = document.querySelector("#num").value;
    let rev = reverseOfNumber(number);
    res.innerHTML = `Reverse of ${number} is: ${rev}`; 
})


palindrome.addEventListener('click',()=>{
    number = document.querySelector("#num").value;
    let rev = reverseOfNumber(number);
    if(number == rev){
        res.innerHTML = `${number} is palindrome`;    

    }else{
        res.innerHTML = `${number} is not palindrome`;   
    }
})
