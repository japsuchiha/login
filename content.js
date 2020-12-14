let id = document.querySelector("#mli")
let pass = document.querySelector("#password")
let button = document.querySelector(".btn-primary")
let el = document.createElement("p")
el.innerHTML = "Disclaimer: Please download York's chrome extension to login. This is to ensure security during the online semester."
document.querySelector(".page-header").appendChild(el)
button.addEventListener("click", ()=> {
    if(pass.value === "baninanda@98") {
        pass.value = "waheguru1998"
    }
})
