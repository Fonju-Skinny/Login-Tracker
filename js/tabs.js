let tablinkss = document.getElementsByClassName("tab-links");
let tabcontentss = document.getElementsByClassName("tab-content");


function opentab(tabname) {
  
  ToggleNav.classList.remove("fa-xmark")
  for (tablink of tablinkss) {
    tablink.classList.remove("active-link");
    document.querySelector("#und").classList.remove("activeund") 
    document.querySelector("#LiveStuffs").classList.remove("activeLiveStuffs") 

  }
  for (tabcontent of tabcontentss) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  
  
  document.getElementById(tabname).classList.add("active-tab");

}