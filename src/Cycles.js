import { debugPort } from 'process';

/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (; start <= end; start++) {
        if (start % 2 == 0) {
            sum += start;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 1;
    while (a / 2 >= 0.1) {
        a = a / 2;
        i = i + 1;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let a = 0;
    let b = '';
    do {
        if ((a + 1) % 3 == 0) {
            b = b + '_';
        } else {
            b = b + message[a];
        }
        a = a + 1;
    } while (message.length > a);
    return b;
}
