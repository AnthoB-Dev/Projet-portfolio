const burger = document.querySelector(".navbar__burger");
const menu = document.querySelector(".navbar__links");
const menuElements = Array.from(menu.children)
const cards = document.querySelectorAll(".card")
const cardsContent = document.querySelectorAll(".card__content")

burger.addEventListener("click", closeNav)

function closeNav() {
    if(!burger.classList.contains("open")) {
        burger.classList.add("open")
        menu.classList.remove("hidden")
        menu.classList.add("menuOutIn")
    } else {
        burger.classList.remove("open")
        burger.classList.add("close")
        menu.classList.remove("menuOutIn")
        menu.classList.add("menuInOut")

        setTimeout(() => {
            burger.classList.remove("close")
            menu.classList.remove("menuInOut")
            menu.classList.add("hidden")
        }, 300)
    }
}

menuElements.forEach((link) => {
    link.addEventListener("click", closeNav)
})

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if(!card.classList.contains("open")) {
            card.classList.add("open")
            card.children[1].classList.add("projectDescrOpen")
        } else {
            card.classList.remove("open")
            card.children[1].classList.remove("projectDescrOpen")
            card.children[1].classList.add("projectDescrClose")
            setTimeout(() => { card.children[1].classList.remove("projectDescrClose") }, 300)
        }
    })
})

const body = document.querySelector("body")

const x = window.matchMedia("(min-width: 1024px)")

