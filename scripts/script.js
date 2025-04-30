document.addEventListener('DOMContentLoaded', () => {

  /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

  const header = document.querySelector('.header');       // создаем переменную находя блок по классу

  if (header) {                                           // проверяем существование элемента в DOM
    console.log('Константа header существует');

    /* 
    *   Алгоритм
    *
    *   1. Начало.
    *   2. Получаем высоту блока/элемента (создание переменной, которая не будет меняться).
    *   3. Проверка условия (навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку): если страница прокручивается.
    *       3.1. Да: Получаем значение насколько прокрутили страницу (создание переменной, которая будет меняться).
    *           3.1.1 Проверка условия (сравниваем высоту элемента и значение прокрученной страницы): если расстояние от верха страницы больше высоты элемента
    *               3.1.1.1. Да: устанавливаем класс модификатора на элемент
    *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляем класс модификатора у элемента
    *       3.2. Нет: Конец
    *   4. Конец
    * 
    *   Блок-схема: /images/block-schema.png
    */

    const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

    document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

      console.log('Страница скролится');

      let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

      if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
        header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
      } else {
        header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
      }

    })

  }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('.open-booking-modal, .hero__buttons .button');
  const closeBtn = document.querySelector('.modal__close');

  // Открытие модального окна для всех кнопок с классом .open-booking-modal
  openBtns.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });

  // Закрытие модального окна
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие при клике вне модального окна
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const form = document.querySelector('#bookingModal form');
  if (!form) {
    console.error('Форма не найдена!');
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;

    const formData = {
      email,
      name,
      phone
    };

    // Сохраняем в localStorage
    localStorage.setItem("bookingData", JSON.stringify(formData));

    // Выводим в консоль
    console.log("Данные формы сохранены:", formData);

    // Можно добавить сообщение или очистку формы
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все кнопки с ценами
  const priceButtons = document.querySelectorAll(".open-booking-modal");

  // Создаем массив с новыми значениями цен
  const prices = ["5000 руб./сутки", "8000 руб./сутки", "15000 руб./сутки"];

  // Проходим по каждой кнопке и заменяем текст на соответствующую цену
  priceButtons.forEach((button, index) => {
    button.textContent = prices[index];
  });
});

const karta_do = document.querySelector(".card__icon-map");
const karta_posle = document.querySelector(".card__icon-map-top");
karta_do.addEventListener('mouseenter', () => {
  karta_posle.style.display = 'block';
  /*karta_posle.style.transform="scale(1.2)";
  karta_posle.style.transition="transform 0.5s";*/

});
karta_do.addEventListener('mouseleave', () => {
  karta_posle.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  const menuData = [
    { text: "Преимущества", href: "#part1" },
    { text: "Тарифы", href: "#part2" },
    { text: "Местоположение", href: "#part3" },
    { text: "Досуг", href: "#part4" }
  ];

  const menuContainer = document.getElementById("nav-menu");

  function createMenuItem(item) {
    const li = document.createElement("li");
    li.classList.add("headeritem", "mini-title");

    const a = document.createElement("a");
    a.classList.add("header__link");
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    return li;
  }

  menuData.forEach(item => {
    menuContainer.appendChild(createMenuItem(item));
  });

  console.log("Динамическое меню загружено");
});


window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1500); // 1.5 секунды
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card__item");
  const buttons = document.querySelectorAll(".benefits__button");
  const apiUrl = "images.json";

  fetch(apiUrl)
    .then(response => response.json())
    .then(images => {
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {

          const card = cards[index];
          const wrap = card.querySelector(".card__image-wrap");
          const data = images.find(item => item.targetIndex === index);

          if (wrap && data) {
            wrap.innerHTML = `
              <img src="${data.imageUrl[0]}" alt="${data.imageAlt}" width="${data.imageWidth}" height="194">
              `;

            if (wrap.style.display !== "block") {
              wrap.style.display = "block";
            } else {
              wrap.style.display = "none";
            }

          }
        });
      });
    })
    .catch(error => console.error("Ошибка при загрузке JSON:", error));
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  }
});

