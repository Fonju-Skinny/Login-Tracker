//  =================== SIGN UP FORM VALIDATION
const form = document.getElementById("SignUpForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameIn = document.querySelector("#name");

  const userFullname = localStorage.getItem("userFullname") || "";

  nameIn.value = userFullname;

  nameIn.addEventListener("change", (r) => {
    localStorage.setItem("userFullname", r.target.value);
  });
  console.log();

});
