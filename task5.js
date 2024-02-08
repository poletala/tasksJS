arr = ['11111111', '2222222', '333', '44444', '555', '6666', '77777']
console.log(arr)
function firstArr(arr) {
    for (i=0;i<arr.length;i++) {
        if (String(arr[i])[0] === '2' || String(arr[i])[0] === '4') {
            console.log(arr[i])
        }
    }
}
firstArr(arr)

function biggerArr(arr) {
    for (i=0;i<arr.length;i++) {
        if (arr[i] > 5) {
            console.log(arr[i])
        }
    } 
}
biggerArr(arr)

function newF(arg) {
    if (typeof arg !== 'string') {
        console.log(`Argument '${arg}' is not a string`)
        return
    }
    if(arg.length > 30) {
        arg = arg.substr(0, 30) + '...';
    }
    console.log(arg.trim())
}
let arg = ' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa '
newF(arg)




