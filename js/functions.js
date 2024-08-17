import { getRandomIntInclusive } from './util.js';

// Создаем массив objectPhoto, который будет содержать 25 объектов фотографий, сгенерированных функцией createObject
const objectPhoto = Array(25).fill(null).map(() => createObject());


// Определяем функцию createObject, которая создает объект photoObject
function createObject() {
// Возвращаем объект photoObject, созданный с помощью литерала объекта
  return {
    // Устанавливаем id фото, которое имеет фиксированное значение 2
    id: 2,
    // Устанавливаем URL фото, формируя его динамически с помощью getRandomIntInclusive, которое генерирует случайное целое число от 1 до 25
    url: `photos/${getRandomIntInclusive(1, 25)}.jpg`,
    // Устанавливаем описание фото, которое имеет фиксированное значение "Просто фото"
    description: 'Просто фото',
    // Устанавливаем количество лайков, генерируя случайное целое число от 15 до 200 с помощью getRandomIntInclusive
    likes: getRandomIntInclusive(15, 200),
    // Создаем массив комментариев, состоящий из 17 элементов , используем map для создания нового объекта комментария для каждого элемента массива
    comments: Array(17).fill(null).map(() => ({
    // Устанавливаем ID комментария, которое имеет фиксированное значение 13
      id: 13,
      // Устанавливаем URL аватара, формируя его динамически с помощью getRandomIntInclusive, которое генерирует случайное целое число от 1 до 6
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      // Устанавливаем сообщение комментария, которое имеет фиксированное значение "В целом всё неплохо. Но не всё хорошо."
      message: 'В целом всё неплохо. Но не всё хорошо.',
      // Устанавливаем имя автора комментария, которое имеет фиксированное значение "Левин"
      name: 'Левин'
    }))
  };
}

export { objectPhoto };
