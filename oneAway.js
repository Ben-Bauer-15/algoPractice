function oneAway(a, b, swaps) {
    if (a == b){ return true; }
    else if (Math.abs(a.length - b.length) > 1){ return false; }
    else if (a == '' && b == ''){ return true; }
    else if (a[0] == b[0]){
        return oneAway(a.slice(1), b.slice(1), swaps);
    }
    else if (swaps == 1) { return false; }
    else if (a.length > b.length){
        return oneAway(a.slice(1), b, swaps + 1);
    }
    else if (b.length > a.length){
        return oneAway(a, b.slice(1), swaps + 1);
    } else { 
        return oneAway(a.slice(1), b.slice(1), swaps + 1);
    }
}

var a = 'abccd'
var b = 'abdcde'

console.log(oneAway(a, b, 0))