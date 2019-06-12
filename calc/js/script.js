// let inputRub = document.getElementById("rub"),
//     inpytUsd = document.getElementById("usd"); 

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();


//     //Методы обьекта
//     request.open('GET', 'js/current.json'); //путь к серверу
//     request.setRequestHeader('Content-type', 'applicaton/json; charset=ulf-8'); //говорим серверу описание того, что отправляем
//     request.send(); //запускает запрос и он идет за ответом к серверу

//     //Свойства этого обьекта(ответы сервера):
//     //status, statusText - код ответа сервера (404 и т.д)/текстовый ответ
//     //response, responseText - это ответ от сервера, т.е данные, которые в файле json
//     //readyState -  указывает на текущее состояние запроса

//     request.addEventListener('readystatechange', function() {
//         if (request.readyState == 4 && request.status == 200) {
//           let data = JSON.parse(request.response); //метод parse - превращает json-файлы в понятные для js конструкции, response - ответ от нашего сервера
          
//           inpytUsd.value = inputRub.value / data.usd;
//         } else {
//           inpytUsd.value = 'что-то пошло не так';
//         }
//     });
// });


let inputRub = document.getElementById("rub"),
    inpytUsd = document.getElementById("usd");

inputRub.addEventListener('input', function() {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'applicaton/json; charset=ulf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if(request.readyState == 4 && request.status == 200) {
          let data = JSON.parse(request.response);
          inpytUsd.value = inputRub.value / data.usd;
        } else {
          inpytUsd.value = "Что-то пошло не так";
        }
    });
});