
/*
 Создайте функцию, которая эмулирует асинхронное получение данных о книге по её ID из внешнего источника (например, API).
  Функция должна возвращать промис, 
 который разрешится с информацией о книге через некоторое время.

Пример массива для работы


const booksDatabase = {
                1: { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
                2: { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
                3: { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma' }
            };


// Пример использования функции
const bookId = 2;


getBookInfoById(bookId)
    .then(bookInfo => {
        console.log(Информация о книге (ID ${bookId}):);
        console.log(Название: ${bookInfo.title});
        console.log(Автор: ${bookInfo.author});
    })
    .catch(error => {
        console.error('Ошибка при получении информации о книге:', error);
    });


Этот пример эмулирует асинхронное получение данных о книге по её ID и возвращает промис, который возвращает с 
информацией о книге или отклоняется с ошибкой (если книга не найдена).
*/
const booksDatabase = {
    1: { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    2: { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
    3: { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma' }
};

function getBookInfoById(bookId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bookInfo = booksDatabase[bookId];
            if (bookInfo) {
                resolve(bookInfo);
            } else {
                reject(new Error('Книга не найдена'));
            }
        }, 1000); // Имитация задержки при получении данных
    });
}

// Пример использования функции
const bookId = 2;

getBookInfoById(bookId)
    .then(bookInfo => {
        console.log(`Информация о книге (ID ${bookId}):`);
        console.log(`Название: ${bookInfo.title}`);
        console.log(`Автор: ${bookInfo.author}`);
    })
    .catch(error => {
        console.error('Ошибка при получении информации о книге:', error);
    });
