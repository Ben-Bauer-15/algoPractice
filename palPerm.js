function palPerm(str){
    var map = {};
    var length = str.length;
    for (i in str){
        const char = str[i].toLowerCase()
        if (char != ' '){
            if (char in map){
                map[char] ++;
            } else {
                map[char] = 1;
            }
        } else {
            length --;
        }
    }
    return checkValid(map, length % 2 == 0)
}

function checkValid(freqs, even){
    var counter = 0;
    for (key in freqs){
        if (freqs[key] % 2 != 0){
            counter ++;
        }
        if (counter > 1 && !even){
            return false
        }
        if (counter > 0 && even){
            return false
        }
    }
    return true
}


var s1 = 'Tact Coa'
var s2 = ''

console.log(palPerm(s1))