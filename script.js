var colorOne = document.querySelector(".one")
var colorTwo = document.querySelector(".two")
var body = document.getElementById("body")
var pTag = document.getElementById("code")



function backgroundGenerate(){

    body.style.background = "linear-gradient(to right,"+ colorOne.value + ", " + colorTwo.value + ")";
    pTag.textContent = body.style.background;

}
colorOne.addEventListener("input", backgroundGenerate)
colorTwo.addEventListener("input", backgroundGenerate)