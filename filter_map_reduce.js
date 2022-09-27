let array = [2, 3, 4, 5, 6]
let arr1 = [12, 13, 14, 15]

// array = array.concat(arr1)

var new_ = array.filter((val) => {
    if (val % 3 == 0) {
        return false
    }
    return true
})


var filterFn = array.map((val) => {
    if (val <= 2) {
        return "Hum do hamare do";
    } else if (val <= 5) {
        return "Hamre to 2 se jada hay"
    } else {
        return "Hume ginti nahi aati"
    }
})

console.log(new_)