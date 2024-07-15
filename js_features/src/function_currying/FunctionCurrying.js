
export default function operation(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

const opn = operation(5);
console.log(opn(5));