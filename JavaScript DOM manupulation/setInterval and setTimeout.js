const sumii = (a, b) => {
    let userIn = 20
    let innerHtml = document.getElementsByClassName("number12")
    userIn = parseInt(userIn)
    if (userIn > 15) {
        innerHtml[0].innerHTML = innerHtml[0].innerHTML + " I alway win the match"
        console.log(innerHtml)
    } else {
        document.write(a + b)
        innerHtml[0].style.color = "red"
        console.log(innerHtml[0])
    }
}

var timeOut = setInterval(sumii, 500, 5, 6)