const links = document.querySelectorAll(".links");
const logo = document.getElementById("logo");

logo.addEventListener("click",()=>{
    for(i=0;i<links.length;i++){
        links[i].classList.remove("nav-active");
    }
})


links.forEach((link)=>
{
    link.addEventListener("click",(e)=>{

        for(i=0;i<links.length;i++){
            links[i].classList.remove("nav-active");
        }

        e.target.classList.add("nav-active");
    });
})

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

const mobLinks = document.querySelector(".mobile-links");



menu.addEventListener("click",()=>{
    nav.classList.toggle("phone-drop-down");
    mobLinks.classList.toggle("dflex");
});