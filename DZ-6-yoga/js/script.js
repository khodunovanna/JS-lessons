window.addEventListener('DOMContentLoaded', function() {

  'use strict'

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
  });

  //Timer

  let deadline = '2019-06-19';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), //parse-превращает любую дату в милисекунды
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
          let t = getTimeRemaining(endtime);
          hours.textContent = t.hours;
          minutes.textContent = t.minutes;
          seconds.textContent = t.seconds;

          if(seconds.textContent.length<2){
            seconds.textContent = '0' + t.seconds;
          }
          if(minutes.textContent.length<2){
            minutes.textContent = '0' + t.minutes;
          }
          if(hours.textContent.length<2){
            hours.textContent = '0' + t.hours;
          }

          if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
          }
        }
  }
  setClock('timer', deadline);

//Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close '),
    description = document.querySelector('.description-btn'),
    tabbContent = document.querySelector('.info-tabcontent');

    tabbContent.addEventListener('click', function(event) {
      let target = event.target;
        if(target && target.classList.contains('description-btn')){
           overlay.style.display = 'block';
           description.classList.add('more-splash');
           document.body.style.overflow = 'hidden';
        }
    });

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // let age = document.getElementById('age');
    //   function showUser(surname, name) {
	  //     alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
    //   }
    //   showUser('Татаркина', 'Анна');


    //Form - узнать подробнее
     
    let message = {
      loading: "Загрузка...",
      seccess: "Спасибо, скоро мы с вами свяжемся",
      failure: "Что-то пошло не так"
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

        statusMessage.classList.add('status');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();

            //request.open(method, url, async, login, password); // наш путь к серверу, где async - ассинхронность запросов, по умолчанию true
            request.open('POST', 'server.php');
            //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//говорим серверу что отправляем обычную форму
            request.setRequestHeader('Content-type', 'applicaton/json; charset=ulf-8');//говорим серверу что отправляем данные в формате json

            let formData = new FormData(form);//получаем все что ответил пользователь

            let obj = {}; //заполним его данными которые есть в форме и потом преобразуем в json формат
            formData.forEach(function(value, key) {
              obj[key] = value;
            }); //превратили наш обьект formData в обычный читаемый обьект

            let json = JSON.stringify(obj); //метод stringify - превращает js-обьекты в json формат

            //request.send(formData);
            request.send(json);

            request.addEventListener('readystatechange', function() {
              if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
              } else if (request.readyState === 4 && request.status == 200) {
                  statusMessage.innerHTML = message.seccess;
              } else {
                  statusMessage.innerHTML = message.failure;
              }
            });

            for(let i = 0; i < input.length; i++) {
              input[i].value = '';
            } //очистили после отправки формы все инпуты(поля)

        });



    //Form - контактная форма

    let formCont = document.getElementById('form'),
        inputCont = formCont.getElementsByTagName('input');

    formCont.addEventListener('submit', function(event) {
        event.preventDefault();
        formCont.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'applicaton/json; charset=ulf-8');

        let formData = new FormData(formCont);
        let obj = {}; 
        formData.forEach(function(value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
            } else if(request.readyState == 4 && request.status == 200) {
              statusMessage.innerHTML = message.seccess;
            } else {
              statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputCont.length; i++) {
          inputCont[i].value = '';
        }
    });

});

