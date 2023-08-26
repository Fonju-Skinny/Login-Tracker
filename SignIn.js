let NewName = document.getElementById("NewName");
let NewEmailLogin = document.getElementById("NewEmailLogin");
let NewPasswordLogin = document.getElementById("NewPasswordLogin");
var contentLogin = document.getElementById("contentLogin")

var recoverForm = document.getElementById("recoverForm")
var StoryGet = document.getElementById("StoryGet")
var recoverLogin = document.getElementById("recoverLogin")

let form = document.getElementById("form");
form.style.display = "none";

let SignInBtn = document.getElementById("SignInBtn");
SignInBtn.classList.remove("activeSign");

let FormCreateBtn = document.getElementById("FormCreateBtn");
FormCreateBtn.classList.remove("activeFormCreateBtn");

let createLogin = document.getElementById("createlogin");
createLogin.style.display = "none";

let succesSignIn = document.getElementById("succesSignIn");
succesSignIn.style.display = "none";

Logins = JSON.parse(localStorage.getItem("Logins")) || [];
const newTodoForm = document.querySelector("#new-LoginForm");

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const Login = {
    EmailLogin: e.target.elements.EmailLogin.value,
    PassWordLogin: e.target.elements.PassWordLogin.value,
    Story: e.target.elements.Story.value,
    ConfirmPassWordLogin: e.target.elements.ConfirmPassWordLogin.value,
  };
  let CheckConfim = ConfirmPassWordLogin.value == PassWordLogin.value;
  localStorage.setItem("nameValue", contentLogin.value);
  let fint = localStorage.getItem("nameValue")
  if (contentLogin.value == "") {
    alert("Please enter your name");
    return;
  } else if (EmailLogin.value == "") {
    alert("Please enter your Email");
    return;
  } else if (
    !EmailLogin.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    alert("Please enter a valid email address");
    return;
  } else if (PassWordLogin.value == "") {
    alert("Please enter your password");
    return;
  } else if (ConfirmPassWordLogin.value == "") {
    alert("Please confirm your password");
    return;
  } else if (Story.value == "") {
    
    alert("Please Story");
    return;
  } else if (!CheckConfim) {
    alert("Please make sure the passwords are the same");
    return;
  } else {
    form.style.display = "flex";
    createLogin.style.display = "none";
  
    alert(fint)
  }
  Logins.push(Login);

  localStorage.setItem("Logins", JSON.stringify(Logins));

  // Reset the form
  e.target.reset();

  DisplayTodos();
});

DisplayTodos();
if (Logins == "") {
  createLogin.style.display = "block";
  form.style.display = "none";
} else {
  form.style.display = "flex";

  // alert("filled");
}

function DisplayTodos() {
  Logins.forEach((Login) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let UseNamV = document.getElementById("UseName");
      let spactEma = NewEmailLogin.value == Login.EmailLogin;
      let spactPass = NewPasswordLogin.value == Login.ConfirmPassWordLogin;
      if (NewEmailLogin.value == "") {
        alert("Email field must not be empty");
        // return
      } else if (!spactEma) {
        alert("incorrect email");
        // return
      } else if (NewPasswordLogin.value == "") {
        alert("Password field must not be empty");
        // return
      } else if (!spactPass) {
        alert("incorrect password");
        // return
      } else {
        succesSignIn.style.display = "flex";
        form.style.display = "none";
        UseNamV.textContent = Login.contentLogin;
      }
    });

    recoverForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let notStory = StoryGet.value == Login.Story;
      if (StoryGet.value == "") {
        alert("can not go")
      }else if (!notStory) {
        alert("not the story")
      } else{
        NewEmailLogin.value = Login.EmailLogin;
        NewPasswordLogin.value = Login.ConfirmPassWordLogin;
        form.style.display = "flex";
       recoverLogin.style.display = "none";
      }
    })
  });
}
setInterval(() => {
  if (!NewEmailLogin.value == "" && !NewPasswordLogin.value == "") {
    SignInBtn.classList.remove("activeSign");
    return
  } 
  
  SignInBtn.classList.add("activeSign");
});

setInterval(() => {
  if (
    contentLogin.value == "" ||
    EmailLogin.value == "" ||
    PassWordLogin.value == "" ||
    Story.value == "" ||
    ConfirmPassWordLogin.value == ""
    ) {
      FormCreateBtn.classList.remove("activeFormCreateBtn");
      // alert("empty")
    } else{
    FormCreateBtn.classList.add("activeFormCreateBtn");
    
  }
  
});

let Recorver = document.querySelector("#Recorver")
Recorver.addEventListener("click", () =>{
  form.style.display = "none";
  recoverLogin.style.display = "flex";
  
})
recoverLogin.style.display = "none";