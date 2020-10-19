// import style from './css/base.css';
// import button from './css/button.css';
// const styles = require('./css/base.css')
import './css/base.css'
// require('./css/base.css')

let clicked = false;
var flag = false;
window.addEventListener("click", function () {
    // 需要手动点击页面才会引入样式！！！
    if (!clicked) {
        console.log('style', style);
    }
});

// setInterval(function () {
//     // unuse和use 是 cssObj上的方法
//     if (flag) {
//         style.unuse();
//     } else {
//         style.use();
//     }
//     flag = !flag;
// }, 500);