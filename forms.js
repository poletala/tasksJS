let email;
let password;
let checkbox;
let textEmail = '';
let textPassword = '';
let textCheckbox = '';


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function myFunction() {
    let emailError;
    let passwordError;
    let checkboxError;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    checkbox = document.getElementById("checkbox");

    if (email==null || email=="") {
        textEmail = "Поле обязательно для заполнения";
        document.getElementById('email').style.backgroundColor='red';
        emailError = true;
    }
    else if (!validateEmail(email)) {
        textEmail = "Email невалидный";
        document.getElementById('email').style.backgroundColor='red';
        emailError = true;
    }
    document.getElementById("error").innerHTML = textEmail;
    // emailError = false;


    if (password==null || password=="") {
        textPassword = "Поле обязательно для заполнения";
        document.getElementById('password').style.backgroundColor='red';
        passwordError = true;
       }
    else if (password.length < 8) {
        textPassword = "Пароль должен содержать как минимум 8 символов";
        document.getElementById('password').style.backgroundColor='red';
        passwordError = true;
    }
    document.getElementById("error-password").innerHTML = textPassword;
    // passwordError = false;

    if (!checkbox.checked) {
        textCheckbox = "Поле обязательно для заполнения";
        // document.getElementById('checkbox').style.backgroundColor='red'; 
        // Почему не работает?
        checkboxError = true;
    }
    document.getElementById("checkbox-error").innerHTML = textCheckbox;
    // checkboxError = false;

    if (emailError || passwordError || checkboxError) {
        return false
    }
   
    let user = {
        email: email,
        password: password,
      };
    
    console.log(user);
}
    