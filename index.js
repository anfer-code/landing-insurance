let hamburguer = document.getElementById("hamburguer__img")
let list = document.getElementById("hamburguer__list")

function toogleClass() {
    if (list.classList.contains("hide")) {
        list.classList.remove("hide")
        list.classList.add("hamburger__list")
        hamburguer.classList.add("close")

    } else {
        list.classList.add("hide")
        list.classList.remove("hamburger__list")
        hamburguer.classList.remove("close")
    }
}