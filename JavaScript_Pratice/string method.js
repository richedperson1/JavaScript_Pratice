var name2 = "Rutvik";
/*
|---------------------------------------------====} Slice operation {====--------------------------------------------|
*/
console.log(name2.slice(2, 3));

/*
It will perform slicing operation in the string same thing we can do in python using following code

name = Rutvik
print(name[2:3])

above python code perform same operation as we wrote in js

|--------------------------------------====} uppercase/lowercase operation {====-------------------------------------|
*/

console.log(name2.toUpperCase())

console.log(name2.toLowerCase())


/*
|---------------------------------------------====} concat operation {====--------------------------------------------|
*/

let name = "Rutvik"
let friend = "Aaru"

let friendList = name.concat(" is the friend of ", friend)

// console.log(friendList)



/*
|---------------------------------------------====} Loop operation {====--------------------------------------------|
*/

// for (word in name) {
//     console.log(name[word])
// }
for (word of name) {
    console.log(word)
}


let str = "Please locate where locate occurs!";
console.log(str.lastIndexOf("locate"));