'use strict';

let emblem = document.getElementById("emblem");
let title = document.querySelector(".name");
let login = document.querySelector(".login");
let password = document.querySelector(".password");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");
let theme = document.querySelector(".theme");
let main = document.querySelector(".main");
let match = document.querySelector(".match");
let submit_match = document.querySelector(".submit_match");
let select_match = document.querySelector(".select_tour");
let first_tour = document.querySelector(".tour_1");
let second_tour = document.querySelector(".tour_2");
let third_tour = document.querySelector(".tour_3");
let Top_scores = document.querySelector(".Top_scores");

theme.addEventListener("click", (event) => 
{
    if (main.style.backgroundColor == "rgb(235, 229, 229)")
    {
        main.style.backgroundColor = "black";
    }
});


submit_match.addEventListener("click", (event) => 
{
    event.preventDefault();

    let match_input = match.value;
    let selected_tour = select_match.value;
    let new_div = document.createElement("div");
    new_div.classList.add("match");
    new_div.innerText = match_input;

    if (selected_tour == "1")
    {
        first_tour.append(new_div);
    }

    else if (selected_tour == "2")
    {
        second_tour.append(new_div);
    }

    else if (selected_tour == "3")
    {
        third_tour.append(new_div);
    }
});

// let login_result = login.value;
// let password_result = password.value;
// submit.addEventListener("click", (event) => 
// {
//     event.preventDefault();

//     fetch("http://web4.informatics.ru:82/api/e0fc71f082864e2c59fb3cf23ad9f6c8/logins")
//         .then(function(response)
//         {
//             if (response.ok)
//             {
//                 let data = response.json();
//                 if (login_result in data)
//                 {
//                     if (data[login_result] == password_result)
//                     {
//                         result.innerText = "Вы успешно вошли в свой аккаунт!";
//                     }
//                     else
//                     {
//                         result.innerText = "Неправильно введён логин или пароль..."
//                     }
//                 }
//                 else
//                 {
//                     data[login_result] = password_result;
//                     console.log("OK");
//                     result.innerText = "Вы зарегистрированы на сайт!";
//                     login.style.outline = "none";
//                     login.style.borderColor = "Green";
//                     password.style.outline = "none";
//                     password.style.borderColor = "Green";
//                     fetch("http://web4.informatics.ru:82/api/e0fc71f082864e2c59fb3cf23ad9f6c8/logins",
//                     {
//                         method: 'POST'
//                     });
//                 }
//             }
//         });
// });
