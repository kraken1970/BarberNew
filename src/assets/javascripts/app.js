let link = document.querySelector(".login");
// ищeм точку входа
let popup = document.querySelector(".modal-content");
// ищем всплывающую форму
let overLay = document.querySelector(".modal-overlay");
/* блок затемнения экрана */
let closePopup = document.querySelector(".modal-content-close");
// ищу точку закыть форму
let login = popup.querySelector("[name=login]");
// ищу поле ввода логина в уже найденной переменной popup
let password = popup.querySelector("[name=password]");

let form = popup.querySelector("form");
/*проверка фомы на заполненность*/
let storage = localStorage.getItem("login");
/* получаю из хранилища браузера */
let linkMap = document.querySelector(".js-open-map")
/* ищу кнопку карты */
let map = document.querySelector(".modal-content-map");
/* ищу карту */
let closeMap = map.querySelector(".modal-content-close");

form.addEventListener("submit", function(event) {
  if (!login.value ||!password.value) {
    event.preventDefault();
    /* запрет отправки формы, т.к. не заполнены поля(е)*/
    // let warningLogin = ("Введите логин и пароль");
    // document.write(warningLogin);
    popup.classList.add("modal-error");
    /*потрясем блок*/
  } else {
    localStorage.setItem("login", login.value);
    /* вношу в хранилище браузера */
  }
  /*console.log(password.value);*/
  /*вывов текущего значения*/
});
link.addEventListener("click", function (event) {
// отсслеживает клик
  event.preventDefault();/*отменяет д. по умолч.*/
   /*НЕ ЗАБЫВАТЬ ОТМЕНУ ДЕЙСТВИЙ ПО УМОЛЧАНИЮ*/
  popup.classList.add("modal-content-show");
  /* передает в popup новый класс (заранее прописан в css).
  В НАПИСАНИИ КЛАССА НЕ ИСПОЛЬЗОВАТЬ ТОЧКУ Т.К. ПЕРЕДАЕТ В HTML*/
  overLay.classList.add("modal-overlay-show");
  /*включаю затемнение*/
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
      /* применяю к эл-ту login метод focus()*/
    }
});

/* закрыть по нажатию спец креста */
closePopup.addEventListener("click", function (event) {
  event.preventDefault;
  popup.classList.remove("modal-content-show");
  overLay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});
/* закрыть по ESC */
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overLay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-error");
    }
  }
})

linkMap.addEventListener("click", function (event) {
  event.preventDefault;
  map.classList.add("modal-content-map-show");
  overLay.classList.add("modal-overlay-show");
});

closeMap.addEventListener("click", function (event) {
  event.preventDefault;
  map.classList.remove("modal-content-map-show");
  overLay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("modal-content-map-show")) {
      map.classList.remove("modal-content-map-show");
      overLay.classList.remove("modal-overlay-show");
    }
  }
})





