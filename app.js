'use strict';

let emblem = document.getElementById("emblem");
let title = document.querySelector(".name");
let login = document.querySelector(".login");
let password = document.querySelector(".password");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");

let login_result = login.value;
let password_result = password.value;
submit.addEventListener("click", (event) => 
{
    event.preventDefault();

    fetch("http://web4.informatics.ru:82/api/e0fc71f082864e2c59fb3cf23ad9f6c8/logins")
        .then(function(response)
        {
            if (response.ok)
            {
                let data = response.json();
                if (login_result in data)
                {
                    if (data[login_result] == password_result)
                    {
                        result.innerText = "Вы успешно вошли в свой аккаунт!";
                    }
                    else
                    {
                        result.innerText = "Неправильно введён логин или пароль..."
                    }
                }
                else
                {
                    data[login_result] = password_result;
                    console.log("OK");
                    result.innerText = "Вы зарегистрированы на сайт!";
                    login.style.outline = "none";
                    login.style.borderColor = "Green";
                    password.style.outline = "none";
                    password.style.borderColor = "Green";
                    fetch("http://web4.informatics.ru:82/api/e0fc71f082864e2c59fb3cf23ad9f6c8/logins",
                    {
                        method: 'POST'
                    });
                }
            }
        });
});