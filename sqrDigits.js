 function sqrEachDigit(x) {
    let xArray = x.toString();
    let y = [];
    xArray = xArray.split('');
    
    for(var i = 0; i < xArray.length; i++) {
        let z = xArray[i] * xArray[i]        
        y.push(z.toString());
    }

    return Number.parseInt(y.join(''));
 }

 sqrEachDigit(9119);
