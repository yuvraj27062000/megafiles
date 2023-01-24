



let text = document.querySelector("div");
let textInput = document.getElementById("colorbox");
let btn = document.getElementById("b1");

btn.addEventListener("click", () => {
    text.style.color = textInput.value;
})

let colorInput1 = document.getElementsByTagName("input")[1]

colorInput1.addEventListener("click", () => {
    let colorInput2 = document.getElementsByTagName("input")[1].value
    text.style.fontSize = colorInput2+"px"
    console.log(colorInput2);
})

// let colorInput2 = document.getElementsByTagName("input")[1].value
// console.log(colorInput2);

let b1 = document.getElementsByTagName("button")[1]

b1.addEventListener("click", () => {
    text.style.fontStyle = "italic";
    console.log("hi");
})

let b2 = document.getElementsByTagName("button")[1]

b2.addEventListener("click", () => {
    text.style.fontStyle = " VICE VERSA";
    console.log("hi");
})

let b3 = document.getElementsByTagName("button")[1]

b3.addEventListener("click", () => {
    text.style.fontStyle = "underline";
    console.log("hi");
})

console.log(b1,b2,b3);