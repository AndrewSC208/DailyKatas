let testStr = 'The quick brow fox jumps over the lazy dog';
let testStr2 = 'The quick brown fox jumps over the lazy dog';

function detectPentagram(str) {
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(var i = 0; i < alph.length; i++) {
        if(str.indexOf(alph[i].toLowerCase()) == -1) {
            console.log('false')
            return false;
        }
    }
    console.log('true')
    return true;
}

detectPentagram(testStr);
detectPentagram(testStr2);