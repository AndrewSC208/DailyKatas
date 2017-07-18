const vert_mirror = "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu";
const hor_mirror = "lVHt\nJVhv\nCSbg\nyeCt";

// function vertMirror(strng) {
//     let strngArray = strng.split('\n'),
//         endArray = []; 
//     for(var i = 0; i < strngArray.length; i ++) {
//         let xI = strngArray[i].split('').reverse().join('');
//         endArray.push(xI);
//     }
//     return endArray.join('\n')
// }
// function horMirror(strng) {
//     let strngArray = strng.split('\n');
//     strngArray = strngArray.reverse().join('\n');
//     return strngArray;
// }
// function oper(fct, s) {
//     if(fct == vertMirror) {
//         vertMirror(s);
//     } else if (fct == horMirror) {
//         horMirror(s);
//     } else {
//         console.log('Did not call a valid function');
//     }
// }

function vertMirror(str) {
    return str.split('\n')
        .map(line => {
            line.split('').reverse().join('')
        })
        .join('\n');
}
function horMirror(str) {
    return str.split('\n')
        .reverse()
        .join('\n');
}
function oper(fct, s) {
    return fct(s);
}

oper(vertMirror, vert_mirror);
oper(horMirror, hor_mirror);
