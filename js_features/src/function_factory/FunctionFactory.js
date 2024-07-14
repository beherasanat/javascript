
export default function arithmeticOperation(operation) {
    
    switch(operation) {
        case "ADD":
            return function(a,b) {return a + b;}
        
    }
}

const multi = arithmeticOperation('ADD');
console.log(multi(2,3));