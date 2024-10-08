// Находим кнопку '-' с нужным классом .scale__control--smaller
// повешать на кнопку обработчик событий Click
//////////// описание обработчика клика //////////////////
// обьявить переменную reduceElement присвоить ей элемент scale__control--value
// обьявляем новую переменную присвоить ей свойство value="100%"
// взять значение из переменной выше, уменьшить его на 25
// вернуть значение переменной value="75%"
// присваиваем переменную,записываем в нее элемент '.img-upload__preview img'
// изменяем стиль переменной transform: scale(0.75)
// объявляем функцию проверки свойства value="75%"
// если значение переменной reduceElement =< 25 ,то значение свойства value="25%" не уменьшается.

// Найти элементы
const previewImage = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectRadio = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.img-upload__effect-level');

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const effectRadios = document.querySelectorAll('.effects__radio');
const uploadForm = document.querySelector('.img-upload__form');


smallerButton.addEventListener('click', () => {
  //  Находим элемент, содержащий значение масштабирования
  const reduceElement = document.querySelector('.scale__control--value');
  //  Преобразуем значение элемента в число
  let currentValue = parseInt(reduceElement.value, 10);
  //  Если текущее значение больше 25, уменьшаем его на 25
  if (currentValue > 25) {
    currentValue -= 25;
    // Обновляем значение элемента с новым значением в процентах
    reduceElement.value = `${currentValue}%`;
    // Применяем масштабирование к изображению previewImage
    previewImage.style.transform = `scale(${currentValue / 100})`;
  }
});

// Находим кнопку '+' с нужным классом .scale__control--bigger
// повешать на кнопку обработчик событий Click
//////////// описание обработчика клика //////////////////
// обьявить переменную increaseElement присвоить ей элемент scale__control--value
// обьявляем новую переменную присвоить ей свойство value="25%"
// взять значение из переменной выше, увеличить его на 25
// вернуть значение переменной value="50%"
// присваиваем переменную,записываем в нее элемент '.img-upload__preview img'
// изменяем стиль переменной transform: scale(0.5)
// объявляем функцию проверки свойства value="50%"
// если значение переменной increaseElement => 100 ,то значение свойства value="100%" не увеличивается.

biggerButton.addEventListener('click', () => {
  //  Находим элемент, содержащий значение масштабирования
  const increaseElement = document.querySelector('.scale__control--value');
  //  Преобразуем значение элемента в число
  let currentValue = parseInt(increaseElement.value, 10);
  //  Если текущее значение меньше 100, увеличиваем его на 25
  if (currentValue < 100) {
    currentValue += 25;
    //  Обновляем значение элемента с новым значением в процентах
    increaseElement.value = `${currentValue}%`;
    //  Применяем масштабирование к изображению previewImage
    previewImage.style.transform = `scale(${currentValue / 100})`;
  }
});

////////////////////////////////////////   ///////////////////////////////////////////////////////
//                        Наложение эффекта на изображение                                      //
/////////////////////////////////////////   //////////////////////////////////////////////////////

// обьявить переменную effectRadios
// находим все элементы радиокнопок с классом .effects__radio.
// обьявляем функцию для обновления класса эффекта изображения updateImageEffect
// updateImageEffect функция:
// Принимает effectClass - строку с именем эффекта.
// Находит изображение в элементе .img-upload__preview.
// Удаляет все классы эффектов с изображения, используя classList.remove().
// Добавляет класс эффекта, соответствующий effectClass, с помощью classList.add().
// Добавляем обработчик события change для всех радиокнопок
// Обработчик события change:
// Проходит по всем радиокнопкам effectRadios.
// Для каждой радиокнопки добавляет обработчик события change.
// В обработчике вызывается updateImageEffect(radio.value), передавая значение выбранной радиокнопки (radio.value).

// Функция для обновления класса эффекта изображения
function updateImageEffect(effectClass) {
  // Удалить все классы эффектов
  effectRadios.forEach((radio) => {
    previewImage.classList.remove(`effects__preview--${radio.value}`);
  });
  // Добавить класс эффекта, соответствующий выбранному радио
  previewImage.classList.add(`effects__preview--${effectClass}`);
}
// Добавить обработчик события change для всех радиокнопок
effectRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    updateImageEffect(radio.value);
  });
});

////////////////////////////////////////   ///////////////////////////////////////////////////////
//                          Интенсивность эффекта слайдера                                      //
/////////////////////////////////////////   //////////////////////////////////////////////////////

// Найти все необходимые элементы изображение, слайдер, поле с уровнем эффекта, радиокнопки, контейнер слайдера.
// Создать переменную selectedEffect для хранения информации о текущем выбранном эффекте.
// Обьявляем функцию updateImageStyle, которая обновляет стиль изображения в зависимости от выбранного эффекта и уровня интенсивности.
// Добавляем обработчики событий change для слайдера и радиокнопок.
// В обработчике события change слайдера обновляется значение поля effect-level__value и стиль изображения.
// В обработчике события change радиокнопок обновляется переменная selectedEffect,
// сбрасывается значение слайдера до 100%,
// обновляется стиль изображения и скрывается или показывается контейнер слайдера.
// Инициализируется noUiSlider с необходимыми параметрами.


// Инициализация noUiSlider
noUiSlider.create(sliderElement, {
  start: [100], // Начальное значение 100%
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  },
  step: 1, // Шаг слайдера
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return value;
    },
  },
});

let selectedEffect = 'none'; // Начальный эффект - "Оригинал"
effectLevel.classList.add('hidden');
// Функция для обновления стиля изображения
function updateImageStyle(effectClass, level) {
  previewImage.style.filter = '';

  switch (effectClass) {
    case 'chrome':
      previewImage.style.filter = `grayscale(${level / 100})`;
      break;
    case 'sepia':
      previewImage.style.filter = `sepia(${level / 100})`;
      break;
    case 'marvin':
      previewImage.style.filter = `invert(${level}%)`;
      break;
    case 'phobos':
      previewImage.style.filter = `blur(${level / 10}px)`;
      break;
    case 'heat':
      previewImage.style.filter = `brightness(${level / 100})`;
      break;
  }
}

// Обработчик события change для слайдера
sliderElement.noUiSlider.on('update', (values, handle) => {
  const level = values[handle];
  effectValue.value = level;
  updateImageStyle(selectedEffect, level);
});

// Обработчик события change для радиокнопок
effectRadio.forEach((radio) => {
  radio.addEventListener('change', () => {
    selectedEffect = radio.value;

    // Сброс уровня интенсивности
    sliderElement.noUiSlider.set([100]); // 100% - начальное значение
    effectValue.value = 100;

    // Обновление стиля изображения
    updateImageStyle(selectedEffect, 100);

    // Скрыть или показать слайдер
    // Проверяем, выбран ли эффект "none" (без эффекта)
    if (selectedEffect === 'none') {
    // Если эффект "none", скрываем элемент с уровнем эффекта
      effectLevel.classList.add('hidden');
    } else {
    // Если эффект не "none", показываем элемент с уровнем эффекта
      effectLevel.classList.remove('hidden');
    }
  });
});
// Прикрепляем обработчик события "reset" к форме
uploadForm.addEventListener('reset', () =>{
// Добавляем класс "hidden" к элементу effectLevel, чтобы скрыть его
  effectLevel.classList.add('hidden');
  // Сбрасываем стили элемента previewImage, возвращая изображение в исходное состояние
  previewImage.style = '';
  // Вызываем функцию updateImageEffect, чтобы сбросить эффект изображения к "none"
  updateImageEffect('none');
});
