'use strict';

let emblem = document.getElementById("emblem");
let title = document.querySelector(".name");
let main = document.querySelector(".main");
let match = document.querySelector(".match");
let submit_match = document.querySelector(".submit_match");
let select_match = document.querySelector(".select_tour");
let first_tour = document.querySelector(".tour_1");
let second_tour = document.querySelector(".tour_2");
let third_tour = document.querySelector(".tour_3");
let Top_scores = document.querySelector(".Top_scores");
let Mexico = document.querySelectorAll(".Mexico");
let team_input = document.querySelector(".team_input");
let team_result = document.querySelector(".select_result");
let submit_matches2 = document.querySelectorAll(".submit_match2");

let teams = {
    "Мексика" : "Mexico",
    "ЮАР" : "UAR",
    "Южная Корея" : "Korea",
    "Дания/Северная Македония/Чехия/Ирландия" : "Europe1",
    "Канада" : "Canada",
    "Италия/Северная Ирландия/Уэльс/Босния и Герциговина" : "Europe2",
    "Катар" : "Katar",
    "Швейцария" : "Shveitsaria",
    "Бразилия" : "Brazilia",
    "Морокко" : "Morocco",
    "Гаити" : "Haiti",
    "Шотландия" : "Scotland",
    "США" : "USA",
    "Парагвай" : "Paraguai",
    "Австралия" : "Australia",
    "Словакия/Косово/Турция/Румыния" : "Europe3",
    "Германия" : "Germany",
    "Кюрасао" : "Kurasao",
    "Кот-д'Ивуар" : "Kot-Divuar",
    "Эквадор" : "Ecuador",
    "Недерланды" : "Netherland",
    "Япония" : "Japan",
    "Украина/Швеция/Польша/Албания" : "Europe4",
    "Тунис" : "Tunisia",
    "Бельгия" : "Belgium",
    "Египет" : "Egipt",
    "Иран" : "Iran",
    "Новая Зеландия" : "NewZeland",
    "Испания" : "Spain",
    "Кабо-Верде" : "CaboVerde",
    "Саудовская Аравия" : "SaudiAravia",
    "Уругвай" : "Uruguai",
    "Франция" : "France",
    "Сенегал" : "Senegal",
    "Ирак/Суринам" : "Africa1",
    "Норвегия" : "Norway",
    "Аргентина" : "Argentina",
    "Алжир" : "Algeria",
    "Австрия" : "Austria",
    "Иордания" : "Jordan",
    "Португалия" : "Portugal",
    "Ямайка/Конго" : "Africa2",
    "Узбекистан" : "Uzbekistan",
    "Англия" : "England",
    "Хорватия" : "Croatia",
    "Гана" : "Hana",
    "Панама" : "Panama"
};


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

for (let submit_match2 of submit_matches2)
{
    submit_match2.addEventListener("click", (event) => 
    {
        event.preventDefault();

        let input = team_input.value;
        let team = "." + teams[input];
        if (Number(document.querySelectorAll(team)[1].innerText) < 3) document.querySelectorAll(team)[1].innerText = Number(document.querySelectorAll(team)[1].innerText) + 1;
        let match_res = team_result.value;
        if (match_res == "Победа")
        {
            Mexico[5].innerText = Number(Mexico[5].innerText) + 3;
        }
    });
}


