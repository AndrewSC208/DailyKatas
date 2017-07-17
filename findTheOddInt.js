// Given an array find the int that appears the odd number of times.

var A = [ 5, 20, 1, -1, 5, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, -2, -2, 5 ];
function findOdd(A) {
    A.sort();

    for(var i = 0; i < A.length; i++) {
        let aVal = A[i]; 
        let absNval = (A.lastIndexOf(aVal) + 1) - (A.indexOf(aVal)); 
        
        if(Math.abs(absNval % 2) ==1 ) {
            return aVal;
        }   
	}
}

findOdd(A);
