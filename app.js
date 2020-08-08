function add(a, b){
    return a + b;
}

function sustract(a, b){
    return a - b;
}

function multiply(a,b ){
    return a*b;
}

function division(a, b){
    return (b !=0 ) ? Number(Math.round((a/b)+'e'+2)+'e-'+2): 'error';
}

function operate(a = 0, b = 0, operator){
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return sustract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return division(a,b);
        default:
            break;
    }
}

let numberButtons = document.querySelectorAll('.button')
let operation = '';
numberButtons.forEach( (button) =>{
    button.addEventListener('click', () => {
        console.log(button.value);
        operation += button.value;
        console.log(operation);
    });
})

let sumOperator = document.getElementById('+')
sumOperator.addEventListener('click', () =>{
    console.log(sumOperator.id);
    operation +=sumOperator.id;
    console.log(operation);
})

let equalsOperator = document.getElementById('equals');
equalsOperator.addEventListener('click', ()=>{
    expresionArray = operation.split('+');
    console.log(operate(Number(expresionArray[0]), Number(expresionArray[1]), '+'));
})

//  para usar en el display
// let display = document.querySelector('.result-container');
// let displayOperation = document.createElement('div');
// displayOperation.classList.add('content');
// displayOperation.textContent = operation.concat(button.value)
// display.appendChild(displayOperation)