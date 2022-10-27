let ele = document.getElementsByClassName("containersParent1")[0]

let divRwq = "div"

var newDiv = document.createElement(divRwq)

// newDiv.innerHTML = "<div><h1> Hello world<h1></div>"

// ele.prepend(newDiv)


// for (let i = 0; i < 10; i++) {
//     let newDiv = document.createElement(divRwq)
//     newDiv.innerHTML = `<div><h1> Hello world ${soMany}<h1></div>`
// }

// ele.appendChild(newDiv)
// ele.appendChild(newDiv)


// newDiv.innerHTML = "<div><h1> Hello world<h1></div>"

// ele.after(newDiv)

newDiv.innerHTML = "<div><h1> Hello world<h1></div>"
ele.append(newDiv)


var divRaq = "div"

var newDiv = document.createElement(divRaq)
newDiv.innerHTML = "<div><h1> Hello world<h1></div>"
ele.append(newDiv)