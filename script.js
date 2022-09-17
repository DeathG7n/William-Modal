const modal = document.querySelectorAll(".modal")[0];
const show = document.getElementById("show")
const hide = document.getElementById("hide")


show.addEventListener("click", (e)=>{
    e.preventDefault()
    const header = modal.querySelector(".modal-header");
    modal.style.display = "flex"
})
hide.addEventListener("click", ()=>{
    modal.style.display = "none"
})