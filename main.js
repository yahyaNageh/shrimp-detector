const detect = document.querySelector(".detect");
const cover = document.querySelector(".cover");
const popup = document.querySelector(".popup");
const yes = document.querySelector(".btnY");
const no = document.querySelector(".btnN");
const shrimp = document.querySelector(".shrimp");
const para = document.querySelector(".popup p");
let laugh = new Audio("laugh.mp3");
detect.onclick = function () {
    cover.classList.remove("hide");
    popup.classList.remove("hide");
};
console.log(yes);
function youShrimp() {
    shrimp.classList.remove("hide");
    laugh.play();
}

yes.onclick = youShrimp;
no.onclick = function () {
    para.innerHTML = "That's what a shrimp would say!!";
    para.style.fontWeight = "900";
    setTimeout(youShrimp, 2250);
};
