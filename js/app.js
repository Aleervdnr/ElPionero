const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const body = document.querySelector("body")
    const nav = document.querySelector(".nav__list")

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")
        burger.classList.toggle("change")
        body.classList.toggle("disabled")
    } )
}
navSlide()



