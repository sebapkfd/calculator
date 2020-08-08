function add(a, b){
    return a + b;
}

function sustract(a, b){
    return a - b;
}

function multiply(a,b){
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

// Funcion Auxiliar, después su funcionamiento será enviado a otra funcion
// funciona solo con +/-
function resolve(string, operator = '+'){
    let operatorToEvaluate;
    if (string.includes('+')){
        expresionArray = string.split('+');
        operatorToEvaluate = '+'
    }
    else if (string.includes('-')) {
        if (string.split('-').length == 3) {
            expresionArray = string.split('-');
            expresionArray.shift();
            expresionArray[0]*=-1;
        }else{
            expresionArray = string.split('-');
        }
        operatorToEvaluate = '-'
    }
    else if(string.includes('*')){
        expresionArray = string.split('*');
        operatorToEvaluate = '*'        
    }
    else if (string.includes('/')){
        expresionArray = string.split('/');
        operatorToEvaluate = '/';
    }
    let aux = operate(Number(expresionArray[0]), Number(expresionArray[1]), operatorToEvaluate);
    operation = aux.toString();
    if (operator != '=') {
    operation += operator
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


let sumOperator = document.querySelectorAll('.operator')
sumOperator.forEach( (operator) =>{
    operator.addEventListener('click', () =>{
        console.log(operator.id);
        (operation.includes('+') || operation.includes('-') || operation.includes('*') || operation.includes('/')) ? resolve(operation, operator.id): operation += operator.id; 
        console.log(operation);
    })
})

let equalsOperator = document.getElementById('equals');
equalsOperator.addEventListener('click', ()=> {
    resolve(operation,'=')
    console.log(operation)
})

let cleanButton = document.getElementById('ac');
cleanButton.addEventListener('click', ()=>{
    operation = '';
})


// Add float point, C option and block when tries to divide by 0