let ToggleNav = document.querySelector("#ToggleNav")
ToggleNav.addEventListener("click", () =>{
    ToggleNav.classList.toggle("fa-slash")
    document.querySelector("#und").classList.toggle("activeund")
    
    

    Togglebtns.classList.remove("fa-chevron-right")
    document.querySelector("#LiveStuffs").classList.remove("activeLiveStuffs") 
    Tabswrapper.classList.remove("active")

})




let ToggleTheme = document.querySelector("#ToggleTheme")
ToggleTheme.addEventListener("click", () => {
    ToggleTheme.classList.toggle("fa-sun")
    document.querySelector("body").classList.toggle("active") 


    ToggleNav.classList.remove("fa-slash")
    // ToggleNav.classList.remove("fa-xmark")
    document.querySelector("#und").classList.remove("activeund") 

    Togglebtns.classList.remove("fa-chevron-right")
    document.querySelector("#LiveStuffs").classList.remove("activeLiveStuffs") 
    // Tabswrapper.classList.remove("active")

    })

let Togglebtns = document.querySelector("#Togglebtns")
Togglebtns.addEventListener("click", () =>{
    Togglebtns.classList.toggle("fa-chevron-right")
    document.querySelector("#LiveStuffs").classList.toggle("activeLiveStuffs") 

    ToggleNav.classList.remove("fa-slash")
    document.querySelector("#und").classList.remove("activeund")

    Tabswrapper.classList.remove("active")

})





let veiwEmail = document.querySelector("#veiwEmail")
let EEmail = document.querySelector("#Email")
veiwEmail.addEventListener("click", () =>{
    veiwEmail.classList.toggle("fa-eye-slash")
    EEmail.type = "email"
    if (veiwEmail.classList.contains("fa-eye-slash")) {
        EEmail.type = "password"
        
    }
})
let veiwPassword = document.querySelector("#veiwPassword")
let PPassword = document.querySelector("#password")
veiwPassword.addEventListener("click", () =>{
    PPassword.type = "password"
    veiwPassword.classList.toggle("fa-eye-slash")
    if (veiwPassword.classList.contains("fa-eye-slash")) {
        PPassword.type = "text"
        
    }
})
// let ToggleNav = document.querySelector(".fa-bars")
// ToggleNav.addEventListener("click", () =>{
//     ToggleNav.classList.toggle("fa-xmark")
//     document.querySelector("#und").classList.toggle("activeund")
    
    
//     ToggleTheme.classList.remove("fa-sun")

//     Togglebtns.classList.remove("fa-chevron-right")
//     document.querySelector("#LiveStuffs").classList.remove("activeLiveStuffs") 
// })








