'use strict';

let login = document.querySelector(".login");
let password = document.querySelector(".password");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");

submit.addEventListener("click", (event) => 
{
    event.preventDefault();
    let login_result = login.value;
    let password_result = password.value;
    fetch("http://web4.informatics.ru:82/api/e0fc71f082864e2c59fb3cf23ad9f6c8/logins")
        .then(function(response)
        {
            if (response.ok)
            {
                let data = response.json();
                if ("Dimon_Junior" in data)
                {
                    if (data[login_result] == password_result)
                    {
                        result.innerText = "Вы успешно вошли в свой аккаунт!";
                        login.style.outline = "none";
                        login.style.borderColor = "Green";
                        password.style.outline = "none";
                        password.style.borderColor = "Green";
                    }
                    else
                    {
                        result.innerText = "Неправильно введён логин или пароль...";
                        login.style.outline = "none";
                        login.style.borderColor = "Red";
                        password.style.outline = "none";
                        password.style.borderColor = "Red";
                    }
                }
                else
                {
                    data.logins = data.login || {}; 
                    data.logins[login_result] = password_result;
                    console.log("OK");
                    result.innerText = "Вы зарегистрированы на сайт!";
                    login.style.outline = "none";
                    login.style.borderColor = "Green";
                    password.style.outline = "none";
                    password.style.borderColor = "Green";
                    let dataJSON = JSON.stringify(data);

                    fetch("http://web4.informatics.ru:82/api/e0fc71f082864e2c59fb3cf23ad9f6c8/logins", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: dataJSON});
                }
            }
        });
});