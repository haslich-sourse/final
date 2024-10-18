console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// Плавное появление слов с задержкой
const texts = document.querySelectorAll('.geometric-layout p');

texts.forEach((text, index) => {
    const words = text.innerHTML.split(' ');
    text.innerHTML = ''; // Очищаем текст

    words.forEach((word, i) => {
        setTimeout(() => {
            text.innerHTML += word + ' ';
        }, i * 150); // Появление каждого слова с задержкой
    });
});


document.querySelector('.circle').addEventListener('click', function () {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0'; // Круг превращается в квадрат
    } else {
        this.style.borderRadius = '50%'; // Квадрат превращается в круг
    }
});


document.querySelector('.square').addEventListener('click', function () {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0'; // Круг превращается в квадрат
    } else {
        this.style.borderRadius = '50%'; // Квадрат превращается в круг
    }
});

document.querySelector('.triangle').addEventListener('click', function () {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0'; // Круг превращается в квадрат
    } else {
        this.style.borderRadius = '50%'; // Квадрат превращается в круг
    }
});