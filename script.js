//сохранили в переменную массив
const directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];
  //находим список для добавления элементов в ДОМ дереве
const directorsList = document.querySelector('.directors-list')
//создаем функцию для добавления элементов на страницу
  const createElements = (obj) => {
    const listItem = document.createElement('li')
    listItem.textContent = obj.name
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    directorsList.append(listItem, wrapper)
    const itemCareer = document.createElement('p')
    itemCareer.classList.add('career')
    itemCareer.textContent = obj.career
   const itemFilms = document.createElement('a')
   
   const films = obj.films
   itemFilms.innerHTML = `<a href='${films}'>Фильмография</a>`
   
   wrapper.append(itemCareer, itemFilms)

  }
//перебираем элементы массива с помощью функции и заполняем страницу
directors.forEach((item) => {
  createElements(item)

}) 
//создаем новый массив с лучшими фильмами режиссеров
  const topFilmsList = directors.map((item)=> {
    return item.top_rated_film
  }).join(', ')
  const bestFilms = document.querySelector('.best-films')
  bestFilms.textContent = topFilmsList;
  console.log(topFilmsList)