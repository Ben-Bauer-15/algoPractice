function toURL(s, len){
    var URL = '';
    for (var i = 0; i < len; i++){
        if (s[i] == ' '){
            URL += '%20'
        } else {
            URL += s[i]
        }
    }
    console.log(URL)
    return URL
}

var s = ''

toURL(s, s.length)