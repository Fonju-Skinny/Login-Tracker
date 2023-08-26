window.addEventListener("load", () => {
    Accounts = JSON.parse(localStorage.getItem("Accounts")) || [];
    const nameInput = document.querySelector("#name");
    const newAccountForm = document.querySelector("#new-Account-form");
  
    const username = localStorage.getItem("username") || "";
  
    nameInput.value = username;
  
    nameInput.addEventListener("change", (e) => {
      localStorage.setItem("username", e.target.value);
    });
    // EditLogin
    newAccountForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      var now = new Date();
      (mo = now.getMonth()), (dnum = now.getDate()), (yr = now.getFullYear());
  
      Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
      };
      var monthfigs = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ];
      // var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
      if (monthfigs[mo] <= 9) {
        mont = "0" + monthfigs[mo];
      } else {
        mont = monthfigs[mo];
      }
      if (dnum.pad(2) <= 9) {
        Dnum = "0" + dnum.pad(2);
      } else {
        Dnum = dnum.pad(2);
      }
      let RealDate = mont + "-" + Dnum + "-" + yr;
  
      const Account = {
        content: e.target.elements.content.value,
        URLs: e.target.elements.URLs.value,
        Email: e.target.elements.Email.value,
        password: e.target.elements.password.value,
        datE: RealDate,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime(),
      };
      
      Accounts.push(Account);
  
      localStorage.setItem("Accounts", JSON.stringify(Accounts));
      document.querySelector("body").style.overflowY = "visible";
      document.querySelector("#checkup").classList.remove("checkupActive");
      document.querySelector("#Addone").classList.add("AddoneActive");
      document.querySelector("header").style.zIndex = "10000";
      setTimeout(() => {
        document.querySelector("#Addone").classList.remove("AddoneActive");
      }, 1000);
  
      // Reset the form
      e.target.reset();
  
      DisplayAccounts();
    });
  
    DisplayAccounts();
  });
  let DoneLogin = document.querySelector("#DoneLogin");
  DoneLogin.addEventListener("click", () => {
    if (document.querySelector("#content").value === '') {
     return
    }else{
      document.querySelector("#content").style.borderColor="var(--primary)"
    }
  
    if (document.querySelector("#URLs").value === '') {  
     return
    }else{
      document.querySelector("#URLs").style.borderColor="var(--primary)"
    }
  
    if (document.querySelector("#Email").value === '') {
     return
    } else{
      document.querySelector("#Email").style.borderColor="var(--primary)"
    }
  
    if (document.querySelector("#password").value === '') {
     return
    } else{
      document.querySelector("#password").style.borderColor="var(--primary)"
    }
    document.querySelector("header").style.zIndex = "0";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("#checkup").classList.add("checkupActive");
    document.querySelector("#acName").innerHTML =
      document.querySelector("#content").value;
    document.querySelector("#acLink").innerHTML =
      document.querySelector("#URLs").value;
    document.querySelector("#acEmail").innerHTML =
      document.querySelector("#Email").value;
    document.querySelector("#acPassword").innerHTML =
      document.querySelector("#password").value;
  
  });
  let EditLogin = document.querySelector("#EditLogin");
  EditLogin.addEventListener("click", () => {
    document.querySelector("header").style.zIndex = "10000";
    document.querySelector("body").style.overflowY = "visible";
    document.querySelector("#checkup").classList.remove("checkupActive");
  });
  let ClearList = document.querySelector("#ClearList");
  ClearList.addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("header").style.zIndex = "0";
    document.querySelector("#Clearsure").classList.add("ClearsureActive");
  });
  let clearNo = document.querySelector("#clearNo");
  clearNo.addEventListener("click", () => {
    document.querySelector("body").style.overflowY = "visible";
    document.querySelector("header").style.zIndex = "10000";
    document.querySelector("#Clearsure").classList.remove("ClearsureActive");
  });
  
  function DisplayAccounts() {
    const AccountList = document.querySelector("#Account-list");
  
    AccountList.innerHTML = "";
    const tabsbox = document.querySelector(".tabs-box");
    console.log(tabsbox.clientHeight);
    tabsbox.innerHTML = ``;
  
    Accounts.forEach((Account) => {
      const AccountItem = document.createElement("div");
      AccountItem.classList.add("Account-item");
      AccountItem.id = Account.content;
      // <li class="tab">Coding</li>
      const tablist = document.createElement("a");
      const label = document.createElement("label");
      const input = document.createElement("input");
      const span = document.createElement("span");
      const content = document.createElement("div");
      const URLs = document.createElement("div");
      const Email = document.createElement("div");
      const password = document.createElement("div");
      const datE = document.createElement("div");
      const actions = document.createElement("div");
      const edit = document.createElement("button");
      const deleteButton = document.createElement("button");
      const actions3 = document.createElement("div");
      const edit3 = document.createElement("button");
      const copy3 = document.createElement("button");
      const actions4 = document.createElement("div");
      const edit4 = document.createElement("button");
      const copy4 = document.createElement("button");
  
      input.type = "checkbox";
      input.checked = Account.done;
      span.classList.add("bubble");
      if (Account.category == "personal") {
        span.classList.add("personal");
      } else {
        span.classList.add("business");
      }
  
      // tabs-box
      tablist.classList.add("tab");
      let tabliste = Account.content;
      tablist.href = "#" + tabliste;
      tablist.addEventListener("click", () => {
        if (tabliste == AccountItem.id) {
          AccountItem.classList.add("activeAccountItem");
          tablist.classList.add("activetabliste");
          setTimeout(() => {
            tablist.classList.remove("activetabliste");
            AccountItem.classList.remove("activeAccountItem");
          }, 3000);
        }
        tablist.removeEventListener();
      });
  
      content.classList.add("Account-content");
      URLs.classList.add("linkBtn");
      Email.classList.add("Account-content");
      password.classList.add("Account-content");
      datE.classList.add("Account-content");
      actions.classList.add("actions");
      // actions2.classList.add('actions');
      actions3.classList.add("actions");
      actions4.classList.add("actions");
      edit.classList.add("edit");
      edit3.classList.add("edit");
      copy3.classList.add("edit");
      edit4.classList.add("edit");
      copy4.classList.add("edit");
      deleteButton.classList.add("delete");
  
      // deleteButton2.classList.add('delete');
      // deleteButton3.classList.add('delete');
      // deleteButton4.classList.add('delete');
  
      content.innerHTML = `<div class="label display">
          <span>Account Name</span>
          <input type="text" class="input1" value="${Account.content}" readonly>
          </div>`;
      URLs.innerHTML = `<a href="${Account.URLs}" target="blank_"> Take me there
          </a>`;
      Email.innerHTML = `<div class="label display">
          <span>Account Email</span>
          <input type="password" value="${Account.Email}" class="input3" readonly>
          </div>`;
      password.innerHTML = `<div class="label display">
          <span>Account Password</span>
          <input type="password" class="input4" value="${Account.password}" readonly>
          </div>`;
  
      datE.innerHTML = `<span>Created on <b>${Account.datE}</b></span>`;
      tablist.innerHTML = Account.content;
  
      edit.innerHTML = `<i id="edit2i" class="fas fa-eye"></i>`;
      deleteButton.innerHTML = "Delete";
      // deleteButton2.innerHTML = 'Delete';
      edit3.innerHTML = `<i id="edit3i" class="fas fa-eye"></i>`;
      copy3.innerHTML = `<i id="copy3i" class="fas fa-copy"></i>`;
      // deleteButton3.innerHTML = 'Delete';
      edit4.innerHTML = `<i id="edit4i" class="fas fa-eye"></i>`;
      copy4.innerHTML = `<i id="copy4i" class="fas fa-copy"></i>`;
      // deleteButton4.innerHTML = 'Delete';
  
      tabsbox.appendChild(tablist);
      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions3.appendChild(edit3);
      actions3.appendChild(copy3);
      // actions3.appendChild(deleteButton3);
      actions4.appendChild(edit4);
      actions4.appendChild(copy4);
      // actions4.appendChild(deleteButton4);
      AccountItem.appendChild(label);
  
      // content.appendChild(ACName)
      content.appendChild(actions);
      // URLs.appendChild(actions2)
      Email.appendChild(actions3);
      password.appendChild(actions4);
      AccountItem.appendChild(content);
      AccountItem.appendChild(Email);
      AccountItem.appendChild(password);
      AccountItem.appendChild(datE);
      AccountItem.appendChild(URLs);
      AccountItem.appendChild(deleteButton);
      // AccountItem.appendChild(actions);
  
      AccountList.appendChild(AccountItem);
  
      if (Account.done) {
        AccountItem.classList.add("done");
      }
  
      input.addEventListener("change", (e) => {
        Account.done = e.target.checked;
        localStorage.setItem("Accounts", JSON.stringify(Accounts));
  
        if (Account.done) {
          AccountItem.classList.add("done");
        } else {
          AccountItem.classList.remove("done");
        }
  
        DisplayAccounts();
      });
  
      edit.addEventListener("click", (e) => {
        const input = content.querySelector(".input1");
        input.removeAttribute("readonly");
        input.focus();
        // 		input.select();
        // document.execCommand('copy')
        let edit2i = content.querySelector("#edit2i");
        if (edit2i.classList.contains("fa-eye")) {
          edit2i.classList.remove("fa-eye");
          edit2i.classList.add("fa-eye-slash");
        } else {
          edit2i.classList.add("fa-eye");
        }
        input.addEventListener("blur", (e) => {
          input.setAttribute("readonly", true);
          Account.content = e.target.value;
          localStorage.setItem("Accounts", JSON.stringify(Accounts));
          DisplayAccounts();
        });
      });
      edit3.addEventListener("click", (e) => {
        const input2 = Email.querySelector(".input3");
        input2.removeAttribute("readonly");
        input2.focus();
        let edit3i = Email.querySelector("#edit3i");
        if (edit3i.classList.contains("fa-eye")) {
          edit3i.classList.remove("fa-eye");
          edit3i.classList.add("fa-eye-slash");
          input2.type = "text";
        } else {
          edit3i.classList.add("fa-eye");
        }
        input2.addEventListener("blur", (e) => {
          input2.setAttribute("readonly", true);
          Account.Email = e.target.value;
          localStorage.setItem("Accounts", JSON.stringify(Accounts));
          DisplayAccounts();
        });
      });
      edit4.addEventListener("click", (e) => {
        const input4 = password.querySelector(".input4");
        input4.removeAttribute("readonly");
        input4.focus();
  
        let edit4i = password.querySelector("#edit4i");
        if (edit4i.classList.contains("fa-eye")) {
          edit4i.classList.remove("fa-eye");
          edit4i.classList.add("fa-eye-slash");
          input4.type = "text";
        } else {
          edit4i.classList.add("fa-eye");
        }
  
        input4.addEventListener("blur", (e) => {
          input4.setAttribute("readonly", true);
          Account.password = e.target.value;
          localStorage.setItem("Accounts", JSON.stringify(Accounts));
          DisplayAccounts();
        });
      });
  
      copy3.addEventListener("click", (e) => {
        const input2 = Email.querySelector(".input3");
        input2.removeAttribute("readonly");
        // input2.focus();
        input2.type = "text";
        input2.select();
        document.execCommand("copy");
        // if (input2.type = "text") {
        // 	input2.type = "password"
        // }
        input2.addEventListener("blur", (e) => {
          input2.setAttribute("readonly", true);
          Account.Email = e.target.value;
          localStorage.setItem("Accounts", JSON.stringify(Accounts));
          DisplayAccounts();
        });
      });
      copy4.addEventListener("click", (e) => {
        const input4 = password.querySelector(".input4");
        input4.removeAttribute("readonly");
        input4.focus();
        input4.type = "text";
        input4.select();
        document.execCommand("copy");
        input4.addEventListener("blur", (e) => {
          input4.setAttribute("readonly", true);
          Account.password = e.target.value;
          localStorage.setItem("Accounts", JSON.stringify(Accounts));
          DisplayAccounts();
        });
      });
  
      deleteButton.addEventListener("click", (e) => {
        Accounts = Accounts.filter((t) => t != Account);
        localStorage.setItem("Accounts", JSON.stringify(Accounts));
        DisplayAccounts();
        document.querySelector("#Minusone").classList.add("MinusoneActive");
        setTimeout(() => {
          document.querySelector("#Minusone").classList.remove("MinusoneActive");
        }, 1000);
      });
  
      let clearLogin = document.querySelector("#clearLogin");
      clearLogin.addEventListener("click", () => {
        Accounts = Accounts.filter((t) => t != Account);
        localStorage.setItem("Accounts", JSON.stringify(Accounts));
        DisplayAccounts();
        document.querySelector("#Clearone").classList.add("ClearoneActive");
        setTimeout(() => {
          document.querySelector("#Clearone").classList.remove("ClearoneActive");
        }, 4000);
        document.querySelector("body").style.overflowY = "visible";
        document.querySelector("#Clearsure").classList.remove("ClearsureActive");
        document.querySelector("header").style.zIndex = "10000";
      });
      // document.querySelector("#AccountsLength").innerHTML = Accounts.length
      // console.log(Accounts.length);
    });
    console.log("you have " + Accounts.length);
  
    let deanplural = document.querySelectorAll("#Accountsplural");
  
    deanplural.forEach((ProPlural) => {
      let pluralchange = Accounts.length;
      if (pluralchange <= 1) {
        ProPlural.textContent = "Login";
      } else {
        ProPlural.textContent = "Logins";
      }
    });
  
    let dean = document.querySelectorAll("#AccountsLength");
  
    dean.forEach((ProNameUse) => {
      let textchange = Accounts.length;
      ProNameUse.textContent = textchange;
    });
  }
  
  // {/* <i class="fas fa-copy"></i> */}
  
  // tabs-box
  
  // setInterval(() => {
  //   if (document.querySelector("#content").value === '') {
  //     document.querySelector("#content").style.borderColor="red"
  //   } else{
  //     document.querySelector("#content").style.borderColor="var(--primary)"
  //   }
  
  //   if (document.querySelector("#URLs").value === '') {
  //     document.querySelector("#URLs").style.borderColor="red"
  //   } else{
  //     document.querySelector("#URLs").style.borderColor="var(--primary)"
  //   }
  
  //   if (document.querySelector("#Email").value === '') {
  //     document.querySelector("#Email").style.borderColor="red"
  //   } else{
  //     document.querySelector("#Email").style.borderColor="var(--primary)"
  //   }
  
  //   if (document.querySelector("#password").value === '') {
  //     document.querySelector("#password").style.borderColor="red"
  //   } else{
  //     document.querySelector("#password").style.borderColor="var(--primary)"
  //   }
  // }, 1000);
  