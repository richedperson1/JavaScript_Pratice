// let submitButton = document.getElementsByClassName("submitClassForm1")[0]


// var nameVal = "None"
// submitButton.onclick = () => {
//     let nameEnter = document.getElementById("fffname")
//     nameVal = nameEnter.value
//     console.log(nameVal)
// }

// let ele = document.getElementById("writeEnter")
// console.log(ele.innerHTML)


// form.onsubmit = () => {
//     let ele = document.getElementById("fffname")
//     console.log(ele.value)

//     let ele1 = document.getElementById("writeEnter")
//     ele1.innerHTML = "Hello wrold"
//     console.log("Hello my name is rutvik")
// }

// let formDataCatch = document.getElementById("formData")

// let ele = document.getElementById("writeEnter")
// console.log(ele)

// let variable = "";


// formDataCatch.onsubmit = (event) => {
//     console.log("Hello wrold");

//     // ele.innerHTML = ele.innerHTML + "Hello wrold"
//     let nameEnter = document.getElementById("fffname")
//     variable = nameEnter.value
//     event.preventDefault();

// }


// Show/Hide the paragraph

// let param = document.getElementById('param')

// let btn = document.getElementById("submiting")
// let lastSubmit = document.getElementById("submitClassForm1")
// btn.onclick = () => {
//     let styling = param.style.display
//     if (styling == "none") {
//         param.style.display = "block";
//         lastSubmit.style.marginBottom = "-170px";
//     } else {
//         lastSubmit.style.marginBottom = "50px";
//         param.style.display = "none";
//     }
// }



// After clicking reset It will reset to Rutvik Jaiswal


let btn = document.getElementById("resetClassForm1")
let lastSubmit = document.getElementById("resetClassForm1")
btn.onclick = (event) => {
    document.getElementById("fffname").value = "Rutvik Jaiswal";
    document.getElementById("userEmailID").value = "rutvikjaiswal195@gmail.com";
    event.preventDefault();
}