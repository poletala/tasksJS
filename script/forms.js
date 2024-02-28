let mail;
let password;
let checkbox;
let emailErrorText = '';
let passwordErrorText = '';
let checkboxErrorText = '';


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function checkInputs() {
    event.preventDefault()
    let isMailError;
    let isPasswordError;
    let isCheckboxError;

    mail = document.getElementById("email").value;
    password = document.getElementById("password").value;
    checkbox = document.getElementById("checkbox");
    
   
    if (mail===null || mail==="") {
        emailErrorText = "Поле обязательно для заполнения";
        document.getElementById('email').style.backgroundColor='red';
        isMailError = true;
    }
    else if (!validateEmail(mail)) {
        emailErrorText = "Email невалидный";
        document.getElementById('email').style.backgroundColor='red';
        isMailError = true;
    }
    document.getElementById("error").innerHTML = emailErrorText;
   
    if (password===null || password==="") {
        passwordErrorText = "Поле обязательно для заполнения";
        document.getElementById('password').style.backgroundColor='red';
        isPasswordError = true;
       }
    else if (password.length < 8) {
        passwordErrorText = "Пароль должен содержать как минимум 8 символов";
        document.getElementById('password').style.backgroundColor='red';
        isPasswordError = true;
    }
    document.getElementById("error-password").innerHTML = passwordErrorText;

    //   Хотела сделать функцию с фокусом на поле, но не работает
    // password.addEventListener('focus', clearValue)
    // function clearValue () {
    //     this.value = " ";
    //     this.style.backgroundColor = 'blue';
    // }


    if (!checkbox.checked) {
        checkboxErrorText = "Поле обязательно для заполнения";
        document.getElementById('checkbox').style.backgroundColor='red'; 
        document.getElementById('checkbox').style.borderColor='red';
        isCheckboxError = true;
    }
    document.getElementById("checkbox-error").innerHTML = checkboxErrorText;

    if (isMailError || isPasswordError || isCheckboxError) {
        return false
    }
   
    let user = {
        email: mail,
        password: password,
      };
    
    console.log(user);
}




    