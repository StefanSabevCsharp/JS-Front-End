function solve(number, op1, op2, op3, op4, op5) {
    let array = [op1, op2, op3, op4, op5];
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}