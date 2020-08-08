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


// Si cuando se presiona un operador ya hay uno antes (quizas solo valga con +/-)
//
let sumOperator = document.querySelectorAll('.operator')
sumOperator.forEach( (operator) =>{
    operator.addEventListener('click', () =>{
        console.log(operator.id);
        (operation.includes('+') || operation.includes('-')) ? resolve(operation, operator.id): operation += operator.id; // solo suma hasta ahora
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


// agregar que resuelva multiplicacion y division
// Equals solo muestre el resultado en pantalla, y que las operaciones se hagan automaticas
//  para usar en el display
// let display = document.querySelector('.result-container');
// let displayOperation = document.createElement('div');
// displayOperation.classList.add('content');
// displayOperation.textContent = operation.concat(button.value)
// display.appendChild(displayOperation)