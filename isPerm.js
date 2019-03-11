function isPerm(a, b){
    var aMap = genFreqs(a)
    var bMap = genFreqs(b)

    for (k in aMap){
        if (bMap[k] != aMap[k]){
            return false
        }
    }
    return true
}

function genFreqs(str){
    var map = {};
    for (i in str){
        if (str[i] in map){
            map[str[i]] ++;
        } else {
            map[str[i]] = 1;
        }
    }
    return map
}

