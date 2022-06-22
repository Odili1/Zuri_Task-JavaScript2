let num1 = prompt('Input First Number: ');
let oper = prompt('Input either + - / *');
let num2 = prompt('Input Second Number: ');


    if (oper == '+'){
        let addNum = Number(num1) + Number(num2);
        alert(`${num1} + ${num2} = ${addNum}`);
    }else if (oper == '-'){
        let minusNum = num1 - num2;
        alert(`${num1} - ${num2} = ${minusNum}`);
    }else if (oper == '*'){
        let multiNum = num1 * num2;
        alert(`${num1} * ${num2} = ${multiNum}`);
    }else if (oper == '/'){
        let divNum = num1 / num2
        alert(`${num1} / ${num2} = ${divNum}`);
    }else{
        alert("Sorry you probably didn't input something correctly");
    }

