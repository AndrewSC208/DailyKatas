// return greeting.
// if name is not a string or absent return null

function greet(name) {
    return name ? `hello ${name}!` : null;
}

console.log(greet('Andrew'));