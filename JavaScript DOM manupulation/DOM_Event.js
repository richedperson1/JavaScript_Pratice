let buttonClass = document.getElementsByClassName("firstButtonClass")

let firstButton = buttonClass[0]

let previous = firstButton.innerHTML;
let previousStyle = firstButton.style;
let boolnes = true;


firstButton.onmouseenter = () => {
    if (boolnes == true) {
        boolnes = false;
        previousStyle.marginTop = "50px"
        console.log("Mouse click using on_mouse_over", boolnes)
    } else {
        boolnes = true;
        previousStyle.marginTop = "-50px"
        console.log("Mouse click using on_mouse_over", boolnes)
    }
}