
const loginForm = document.getElementById("login_form");
const usernameInput = document.getElementById("username_input");
const passwordInput = document.getElementById("password_input");
const outputDiv = document.getElementById("output_div");
let accountList = [];
async function loadJSON() {
  try {
    // get file
    const logins = await fetch("/logins.json");

    // parse
    const parsedJSON = await logins.json();
    accountList = parsedJSON.AccountInfo;

    return parsedJSON;

  } catch (error) {
    console.error("Error loading file:", error);
  }
}

class AccountInfo {
  constructor(password, username) {
    this.password = password;
    this.username = username;
  }
}

loadJSON();

loginForm.addEventListener("submit", function (event){
  event.preventDefault();
  let tempUser = usernameInput.value;
  let tempPass = passwordInput.value;

  //WRONG CODE HERE
  /*let outputFlag;
  listCheck: for (const AccountObj of accountList) {
    if (AccountObj.username === tempUser) {
      if (AccountObj.password === tempPass) {
        outputFlag = "Logged In";
        break listCheck;
      }  else {outputFlag = "Wrong Password";}
    } else {outputFlag = "That Username doesn't exist";}
  }*/

  let profile = accountList.find((user) => user.username === tempUser);
  if (!profile) {
    outputFlag = "YOU DON'T EXIST HAHAHAHAHAHA";
  } else if (profile.password === tempPass) {
    outputFlag = "YOU LOGGED IN MUAHAHAHAHAHA";
  } else {
    outputFlag = "WRONG PASSWORD HAHAHAHAHA";
  }
  
  outputDiv.innerHTML = outputFlag;
})
