function Login() {
}

Login.userNameInput = 'userNameInput';
Login.passwordInput = 'passwordInput';

Login.initialize = function () {

    var u = new InputUtil();

    u.checkError();
    u.setInitialFocus(Login.userNameInput);
    u.setInitialFocus(Login.passwordInput);
}();

Login.submitLoginRequest = function () { 
    var u = new InputUtil();
    var e = new LoginErrors();

    var userName = document.getElementById(Login.userNameInput);
    var password = document.getElementById(Login.passwordInput);

    if (!userName.value || !userName.value.match('[@\\\\]')) {
        u.setError(userName, e.userNameFormatError);
        return false;
    }

    if (!password.value) {
        u.setError(password, e.passwordEmpty);
        return false;
    }

    if (password.value.length > maxPasswordLength) {
        u.setError(password, e.passwordTooLong);
        return false;
    }

    document.forms['loginForm'].submit();
    return false;
};

InputUtil.makePlaceholder(Login.userNameInput);
InputUtil.makePlaceholder(Login.passwordInput);