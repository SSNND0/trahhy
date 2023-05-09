function UpdatePlaceholders() {
    var userName;
    if (typeof Login != 'undefined'){
        userName = document.getElementById(Login.userNameInput) 
    }
    if (typeof UpdatePassword != 'undefined'){
        userName = document.getElementById(UpdatePassword.userNameInput);
    }
    if (typeof userName != 'undefined'){
        userName.setAttribute("placeholder","FCPS username");
    }
}