
let proSetx = document.querySelector("#proSetx")

function showProfiSetx() {
    proSetx.classList.add("active")
}
function backProSet() {
  proSetx.classList.remove("active")   
}
    
setInterval(() => {

    const inputEl = document.getElementById("file-input-element");

    inputEl.addEventListener("change", () => {
      const file = inputEl.files[0];
      const fr = new FileReader();
      fr.readAsDataURL(file);
      
      fr.addEventListener("load", () => {
        const url = fr.result;
        localStorage.setItem("image", url);
        // Saves image to localStorage
      });
    });


    // Get data URL from localStorage
  
    const url = localStorage.getItem("image");
    const img = new Image();
    img.src = url;
    document.querySelector("#profile-pic").src = img.src
    if (img.src === "http://127.0.0.1:5502/Main/null"){
      // alert("empty")
      document.querySelector("#profile-pic").src = `../Images/237Logo.png`
    }
    // img.classList.add("image");
    

    let allImgPro = document.querySelectorAll("#allImgPro")
    allImgPro.forEach((allImgProALL) => {
      let imrc = img.src
      if (img.src === "http://127.0.0.1:5502/Main/null"){
      // alert("empty")
      allImgProALL.src = `../Images/237Logo.png`
    }else{

      allImgProALL.src = imrc
    }
    })
    
   
      
  });
  
  let inputname = document.querySelector("#inputname")
  inputname.value = localStorage.getItem("nameValue")
let proName = document.querySelector("#proName")
proName.innerHTML = localStorage.getItem("nameValue")
function UpdateProSet() {
      window.location.reload();
      let inNameNew =inputname.value
      // alert(

      localStorage.removeItem("nameValue")
      localStorage.setItem("nameValue", inNameNew)

     
}


   