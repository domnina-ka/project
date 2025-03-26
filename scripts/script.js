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

const karta_do=document.querySelector(".card__icon-map");
const karta_posle=document.querySelector(".card__icon-map-top");
karta_do.addEventListener('mouseenter', () => {
    karta_posle.style.display = 'block';
    /*karta_posle.style.transform="scale(1.2)";
    karta_posle.style.transition="transform 0.5s";*/

});
karta_do.addEventListener('mouseleave', () => {
    karta_posle.style.display = 'none';
});