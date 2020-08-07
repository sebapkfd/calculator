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