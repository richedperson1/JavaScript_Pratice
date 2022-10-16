var marks = { Rutvik: 99, Gokul: 98, Ashish: 99 }

// Printing mark of student using For in loop
// for (word in marks) {
//     console.log(word, "got :", marks[word])
// }

var len = Object.keys(marks)

for (let i = 0; i < len.length; i++) {
    console.log(len[i], "got", String(marks[len[i]]), "in the final exam")
}


/*

-----------------------------------------| String |--------------------------------------------------

*/

// Backtick in JS

let sub = "Hindi"
let sub2 = "English"
var sent = `Rutvik first language is ${sub} and second language is ${sub2} `
console.log(sent)