import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, event.seconds);
};

if (localStorage.getItem(VIDEOPLAYER_CURRENT_TIME) !== null) {
player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME));
}



// 1.import Player from '@vimeo/player'-імпортує Player назва зміною в яку імпортується from -звідки '@vimeo/player' - назва бібліотеки
// 1.1API програвача Vimeo дозволяє вам взаємодіяти з вбудованим програвачем Vimeo та керувати ним. (npm install @vimeo/player)
// 2.const throttle = require('lodash.throttle') така документація передачі бібліотеки throttle (npm i lodash.throttle)
// 3.const iframe = document.querySelector('iframe') доступ до відещ через тег frame
// 4.const player = new Player(iframe);ми в нову зміну передаємо
// 
// 
//1.'timeupdate' Событие timeupdate происходит при изменении игрового положения аудио/видео. Это событие вызывается: Воспроизведение аудио/видео або Перемещение позиции воспроизведения
//  2.on(event: string, callback: function)-Додайте обробник події для вказаної події. Викличе зворотний виклик з одним параметром, dякий містить дані для цієї події.
//localStorage.setItem-Дозволяє зберігати дані без закінчення терміну дії у форматі пар ключ:значення на комп'ютері користувача і читати їх при повторному відвідуванні сторінки.
//setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// getCurrentTime() Цей метод отримує тривалість відео в секундах, округлену до найближчої секунди перед початком відтворення та до найближчої тисячної частки секунди після початку відтворення.