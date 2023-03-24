function sinh(x){
    //set e^x
    let e1 = exp(x);
    //set e^-x
    let e2 = exp(-x);
    //calculate sinh(x) = e^x-e^-x/2
    let result = (e1 - e2)/2;
    return result;

    //used to calculate e^x
    function exp(x) {
        let exp = 1;
        let term = 1;
        //using 50 as an interator, as this gets accurate results of e^x, any higher number does not make a difference.
        for (let i = 1; i < 50; i++) {
            term *= x / i;
            exp += term;
        }
        return exp;
    }
}

export default sinh;