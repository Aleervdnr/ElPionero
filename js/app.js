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

// nav section active on scroll

const sections = document.querySelectorAll("section")
const navlink = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", ()=>{
  let current = ""
  sections.forEach( section =>{
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if(scrollY >= sectionTop - sectionHeight/3){
      current = section.getAttribute("id")
    }
  })

  navlink.forEach( a =>{
    a.classList.remove("active")
    if(a.classList.contains(current+"__link")){
      a.classList.add("active")
    }
  })
  console.log(current)
})



