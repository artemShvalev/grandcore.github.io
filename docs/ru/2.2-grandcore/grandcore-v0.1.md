# GrandCore Платформа - описание версии 0.1

_Это черновик!._

# Описание сервисов

_В данном разделе описываются все сервисы сгруппированные по экранам, на которых пользователь с ними взаимодействует_

## Общие элементы

**Шапка**

- Скраю слева логотип, который является ссылкой на главную страницу
- После логотипа ссылки на сервисы платформы. В случае если часть не помещается, последние скрываются в всплывающем меню за иконкой с тремя точками (показано в компонентах).
- С правой стороны личное меню пользователя. В случае, если он не авторизован - можно увидить только кнопку "войти". После авторизации в десктопном режиме размещены ссылка на страницу лс, заказов в маркетплейсе и бирже услуг, ленты новостей, процессов в которых участвует пользователь, кнопка поиска, нажав на которыю появляется поле поиска. Последняя кнопка с аватаркой вызывает меню пльзователя. В десктопном режиме там можно найти ссылку на дичный кабинет, админ панель (если пользователь имеет на это права) и кнопка "выход". В мобильной версии туда скрываются все кнопки кроме поиска.

**Подвал**

- Слева логотип без текста, нажав на который пользователь попадает на главную страницу.
- Далее ссылки на дополнительные страницы
- Посередине годы проекта и лицензия
- Справа иконки с контактами. Открываются всегда в новом окне
- В мобильной версии два левых, центральный и правый блоки что описаны выше переносятся в три строки.

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Авторизация

**Вход**

- Сверху над формой расположен переключатель между экраном входа и регистрации
- Для авторизации используется два поля, почты и регистрации. Первое поле валидирует на тип "емэйл", второе валидирует на количество символов бол. 8ми, наличие только латинских букв, цифр и символов. Пароль скрыт за точками.
- Ниже ссылка на страницу восстановления пароля.
- Ниже кнопка "войти", после нажатия на которую пользователь возвращается на ту же страницу, с который он нажал кнопку авторизации на сайте. По умолчанию - главная страница

**Регистрация**

- Сверху аналогичный страницы входа переключатель.
- ниже форма логина, который должен состоять не менее чем из 8 символов, допускаются латинские буквы, цифры, знаки точки, тире и подчёркивания. Проводится валидация.
- Почта должна проверяться на валидность
- Пароль валидируется на количество символов бол. 8ми, наличие только латинских букв, цифр и символов. Скрывается за точками, символ справа показывает введённый пароль.
- Повторный пароль валидирается как первое поле, но при этом так же на соответствие первому полю.
- Ниже текст про то как получить инвайт. Переход по ссылкам в новых вкладках

**Восстановдение**

- Ниже заголовка поля для ввода почты с валидацией.
- Ниже кнопка для принятия письма
- Ниже, ссылка, которая возвращает на форму авторизации

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Главная страница

**Шапка**

- На фоне паттерн из svg изображений
- Сверху слев логотип и вступительное слово
- правее кнопка "смотреть видео", которая затемняет экран и показывает на перенднем плане видео презентации
- Ниже слева две кнопки, которые переводят на страницу "О Фонде" и "Предложить проект" соответственно.
- Правее указаны ссылки на наши страницы и контакты. Всё открывается в новом окне
- Ниже блок со статистикой. Данный блок полностью состоит из внасимых в ручную переменных.

**Главные проекты**

- Карточки идут вряд по 4 штуки в ряду
- Данные сортируются по полю "sort"
- При уменьшении ряды уменьшеются
- На мобольшом экране карточки отображаются в виде карусели
- Ниже кнопка "все проекты" нажав на которую пользователь попадает на каталог проектов. На страницу, где отображаюся все проекты без фильтрации

**Пожертвования**

- 2 карточки в ряд. На мобильном экране - горизонтальная прокрутка
- Нажав на имя, пользователь попадает на личную страницу пользователя
- кнопка "стать спонсором" перенаправляет на временную страницу со списком спонсоров

**Участники**

- Картояки в два столбика. В моб. версии - горизонтальный скрол
- Данные сортируются по полю "sort"
- При нажатии на аватар или имя участника пользователь переходит на его личную страницу
- Кнопка ниже - переводит на общи список пользователей

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## О фонде

**Меню**

- С левой стороны дерево навигации, автоматически сгенерированное на основе h1,h2,h3 в текст справа.

**Текст**

- Основной текст хранится в переменной, администратор может редактировать текст в админке.

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Предложить Проект (временная страница)

**Описание**

- С левой стороны текст, который описывает требования к проекту.

**Форма**

- С правой стороны пользователь (как авторизованный, так и нет) указывает свою почту, телеграм по желанию, и опиание идеи в текстарии, это поле обязательное к заполнению
- Ниже сделать капчу
- Ниже кнопка "отправить"

**Обработка формы**

- Заполненная форма отправляется на почтовый ящик.
- В теме письма первые 20 символов предложения, в теле обратный емэйл и телеграм, после чего полный текст предложения.

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Пожертвования (временная страница)

**Шапка**

- Слева svg пончик.
- Справа большой лид текст с призывом помощи
- Ниже кнопка "пожертвовать", которая переносит на страницу https://yoomoney.ru/to/410019594133149 Открывается в новом окне.
- Ниже текст про то, на что пойдут деньги.
- Ниже статистика, которая берётся из тех же переменных,

**Список пожертвований**

- Заголовок/благодарность за пожертвование
- Карточка в два столбика, в моб версии горизонтальный скрол.
  -- Имя слева сверху. При нажатии на имя - переход на страницу пользователя, если пользователь не выбран, указывается "анонимно"
- Справа сверху указывается внутренний кашелёк, на который осуществляется пожертвование.
- Ниже указывается комментарий жертвователя. Если комментарий отсутствиует, выводится "без комментариев"
- Снизу слева сумма пожертвования
- Снизу справа дата и время пожертвования
- Пожертвования вводятся вручную администратором в мвп
- Пожертвования сортируются по дате добавления
- Ниже - кнопка, которая подгркжает более старые пожетвования
- **Пути к файлам**
- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Список участников

**Список участников**

- Справа сверху фильтр. По умолчанию сортировка по полю "sort" (называется "по рейтингу"), второе условие - дата регистрации, сначала старые. Вторая сортировка - снаачала новые
- карточка состоит из аватара, нажав на который пользователь попадает на страницу профиля, ниже - группы в которые входит пользователь (может быть в несколько строчек), ниже скилв которые имеет учпастник (может быть в несколько строчек)

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Страница участника (временная страница)

**Блоки**

- С левой стороны аватар
- правее блоки, где укащываются группы в которые входит пользователь, его компетенции и рейтинг. Если пользователь соответствует настройкам приватности участника ниже размещается ссылка на телеграм (настройки: видно всем, только авторизованным участникам, только группе администраторам )
- Правую половину экрана занимает текст, где пользователь рассказывает о себе.

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Редактирование профиля

**Блоки**

- С левой стороны размещается фотография пользователя. Если нажать на значёк редактирования, открывается окно выбора новой аватарки в замен текущей. Ниже кнопка "удалить фото"
- С правой стороны - форма редактирования информации пользователя.
- Ниже - кнопка сохранения изменений

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Каталог Проектов

**Навигация по спискам**

- меню находится в блоке равном 100% по вертикали. В случае, если оно полностью не помещается, появляется полоса скрола
- Можно выбрать как тип проекта (софт, игры итд), так и направление (например, игры -> стратегии)
- В мобильной версии каталог скрывается в кнопку

**Карточки**

- Сверху меню фильтрации. По умолчанию - по рейтингу, так же доступен вариант - по новизне
- Карточки идут в 3 и два ряда в десктопной версии и в 1, в мобильной
- По умолчанию отображается список всех проектов отсортированный по рейтингу.
- **Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Страница Проекта

**Шапка**

**Основная информация**

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Отработка 404

**Блоки**

- Слева картинка 404
- Справа текст "Сорян, страницы нет"
- Ниже - "вернуться" мелким шрифтом

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api

## Администрирование

**Раздел1**

**Раздел2**

**Раздел3**

**Раздел4**

**Раздел5**

**Пути к файлам**

- Например, модель: путь к файлу
- Например, контроллер : путь к файлу
- Например, основная вьюха : путь к файлу
- Например, компонент фьюхи1 : путь к файлу
- Например, компонент фьюхи2 : путь к файлу

**API**

- Например, набор данных1 : url api
- Например, набор данных2 : url api
