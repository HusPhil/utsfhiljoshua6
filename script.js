const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
document.querySelector("#close-modal-btn")

setTimeout( () => modal.classList.add("show-modal-anim"), 1000)
setTimeout( () => overlay.classList.add("show-modal"), 1)

addEventListener("click", () => {
    modal.classList.remove("show-modal")
    modal.classList.add("hide-modal", "noclick")
    overlay.classList.remove("show-modal")

})