// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

let stringArray = ["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"];
let n = 2;

//"abigailtheta"
//wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck

function longestConsec(strArray, k) {
    let n = [];

    strArray.sort((a, b) => {
        return b.length - a.length;
    });

    n = strArray.slice(0, k);
    n = n.join('');

    if(n.length === 0 || k > n.length || k <= 0) {
        return "";
    } else {
        console.log(n);
        return n;
    }
}

longestConsec(stringArray, n);