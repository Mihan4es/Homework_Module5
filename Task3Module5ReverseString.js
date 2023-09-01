// let string = "Hello"
// let reverse = string.split('').reverse().join('');
// console.log(reverse)

function reverse(str) {
    return str.split('').reduce((x, y) => y + x);
}

const str = 'Hello';
const rev = reverse(str);
console.log(rev);

//плюс есть варианты реверса слов с использованием расширений.Например, _.reverse метод обращения строки.
//Также можно использовать Lodash.js имеет _.reverse метод реверсирования массива.
