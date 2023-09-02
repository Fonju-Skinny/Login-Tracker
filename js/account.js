
let deleteHistry = document.querySelector(".deleteHistry")
// deleteHistry.classList.add("Active")
function deleteACount() {
    deleteHistry.classList.add("active")
}
let gobacktoHome = document.querySelector("#gobacktoHome")
// deleteHistry.classList.add("Active")
gobacktoHome.addEventListener("click", () =>{
    deleteHistry.classList.remove("active")

})

let ClearACCMainBtn = document.querySelector("#ClearACCMainBtn")

let DeletACSuccess = document.querySelector("#DeletACSuccess")
let DeleteAccbox = document.querySelector("#DeleteAccbox")
// DeletACSuccess.classList.add("Active")

ClearACCMainBtn.addEventListener("click", () =>{
    DeleteAccbox.classList.add("active")
    DeletACSuccess.classList.add("active")
    localStorage.removeItem("Accounts")
    localStorage.removeItem("Logins")
    localStorage.removeItem("image")
    localStorage.removeItem("nameValue")

})
