var a = 7

// problme statements 1

if (a > 5 & a < 10) {
    console.log("you qualified")
} else {
    console.log("Not qualified")
}

// problme statements 2
switch (a) {
    case 5:
        console.log("Hello world")
        break
    case 6:
        console.log("mera nahi hay hay ladaka")
        break
    case 7:
        console.log("Ye ladaka purana ho gaya")
        break
}

// problme statements 3
num = prompt("Enter the age ?")

if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number : " + num + " is divisible by 2 and 3")
} else {
    console.log("Number : " + num + "is not divisible by 2 and 3")
}