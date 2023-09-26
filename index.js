// Задание 1

// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти
// минимальное число в массиве, решение задание должно состоять из одной строки

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 1');
console.log('--------------------------------------------------------------------');
const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

// --------------------------------------------------------------------
// Задание 2

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя
// методами: increment и decrement. Метод increment должен увеличивать значение счетчика
// на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика
// должно быть доступно только через методы объекта, а не напрямую.

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 2');
console.log('--------------------------------------------------------------------');

function createCounter(counter) {
  return {
    increment: () => {
      counter++;
    },
    decrement: () => {
      counter--;
    },
    result: () => {
      return counter;
    },
  };
}

const methodObj = createCounter(9);
methodObj.increment();
methodObj.increment();
methodObj.increment();
console.log(methodObj.result());
methodObj.decrement();
console.log(methodObj.result());

// --------------------------------------------------------------------
// Задание 3

// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент
// дерева DOM и название класса в качестве аргументов и возвращает первый найденный
// элемент с указанным классом в этом дереве.

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 3');
console.log('--------------------------------------------------------------------');

const bodyEl = document.querySelector('body');

function findElementByClass(DOMElement, nameClass) {
  DOMElement.firstElementChild.className === nameClass
    ? console.log(DOMElement.firstElementChild)
    : findElementByClass(DOMElement.firstElementChild, nameClass);
}

findElementByClass(bodyEl, 'class3');

// --------------------------------------------------------------------
