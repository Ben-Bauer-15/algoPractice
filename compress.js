function compress(s){
    var map = [];
    var idx = 0;
    while (idx < s.length){
        const char = s[idx]
        const dict = {char : char, count : 0}
        map.push(dict)
        while (s[idx] == char){
            map[map.length - 1].count ++;
            idx ++;
        }
    }

    if ((map.length * 2) >= s.length){
        return s
    } else {
        var ans = ''
        for (i in map){
            const dict = map[i]
            ans += dict.char
            ans += dict.count
        }
        return ans
    }
}

const a = 'aa'

console.log(compress(a))