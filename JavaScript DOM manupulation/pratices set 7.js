let parentClass = document.getElementsByClassName("parentClass")

let firstChilden1 = parentClass[0].childNodes[1]
let firstChilden2 = parentClass[0].childNodes
    // firstChilden2 = firstChilden2[firstChilden2.length - 2]

// console.log(firstChilden2)
// firstChilden2.style.color = "blue"
// firstChilden1.style.color = "red"


var arr = Array.from(document.getElementsByClassName("orderElements"))

// method 1
// for (a in arr) {
//     arr[a].style.color = "cyan";
//     console.log(arr[a])
// }

// method 2

arr.forEach((val) => {
    val.style.color = "gray";
})