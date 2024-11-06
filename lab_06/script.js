function calculator() {
    let num1 = parseFloat(prompt("перше число :"));
    let operator = prompt("операція (+, -, *, /):");
    let num2 = parseFloat(prompt("друге число"));
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("не можна ділити на 0");
                return;
            }
            break;
        default:
            alert("не працює");
            return;
    }

    alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
}
calculator(
);