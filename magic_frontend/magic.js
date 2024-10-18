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
// создать canvas И установить размеры


const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Функция для установки размера canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Задаем canvas позицию на заднем плане

const stars = [];


// Функция для создания звезд
function createStars() {
    stars.length = 0; // Очищаем массив звезд при изменении размера
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5,
            speed: Math.random() * 0.5 + 0.5
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
        }
    });

    requestAnimationFrame(drawStars);
}


// Слушаем событие изменения размера окна и обновляем canvas и звезды
window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
});

// Инициализация размеров и звезд
resizeCanvas();
createStars();
drawStars();