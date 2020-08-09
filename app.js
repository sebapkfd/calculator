function operate(a = 0, b = 0, operator){
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a*b;
        case '/':
            return (b !=0 ) ? Number(Math.round((a/b)+'e'+2)+'e-'+2): 'error';
        default:
            break;
    }
}

function displayResult(result = '0'){
    let containerResult = document.querySelector('.result-container');
    let contentResult = document.createElement('div');
    contentResult.classList.add('content');
    contentResult.textContent = result;
    if (containerResult.firstChild === null) {
        containerResult.appendChild(contentResult);
    }else{
        containerResult.removeChild(containerResult.firstChild);
        containerResult.appendChild(contentResult);
    }
}

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

displayResult();
let operation = '';

let numberButtons = document.querySelectorAll('.button')
numberButtons.forEach( (button) =>{
    button.addEventListener('click', () => {
        if (!operation.includes('error')){
            console.log(button.value);
            operation += button.value;
            displayResult(operation);
        }
    });
})

let sumOperator = document.querySelectorAll('.operator')
sumOperator.forEach( (operator) =>{
    operator.addEventListener('click', () =>{
        if (!operation.includes('error')) {
            console.log(operator.id);
            (operation.includes('+') || operation.includes('-') || operation.includes('*') || operation.includes('/')) ? resolve(operation, operator.id): operation += operator.id; 
            displayResult(operation);
        }
    })
})

let equalsOperator = document.getElementById('equals');
equalsOperator.addEventListener('click', ()=> {
    if (!operation.includes('error')) {
        resolve(operation,'=')
        displayResult(operation);
    }
})

let cleanButton = document.getElementById('ac');
cleanButton.addEventListener('click', ()=>{
    operation = '';
    displayResult();
})

