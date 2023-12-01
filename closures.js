document.getElementById("loginButton").onclick = login();

userInbox = 420.69;

function login(){
    let userName = "Tamil";
    let userInbox = 1;
    function alertUser(){
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }
    return alertUser;
}