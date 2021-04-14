<h1><b>Stoner-Based</b></h1>

Презентационная версия - https://dmitryzhuravskiy.github.io/stoner-based/ 
<br /><br />

<h2><b>Руководство по запуску</b></h2>
<b>1.</b> git clone https://github.com/DmitryZhuravskiy/stoner-based.git <i> - копируем репозиторий;</i><br />
<b>2.</b> cd ./stoner-based <i>- переходим в папку с локальной версией;</i><br />
<b>3.</b> npm install <i>- устанавливаем зависимости;</i><br />
<b>4.</b> npm start <i>- для просмотра локальной версии в браузере по адресу http://localhost:3000/ ;</i><br />
<b>5.</b> <i>или</i> npm run build <i> для сборки проекта;</i><br />
<br /><br />
<h2><b>Описание проекта</b></h2>

Представляет из себя часть функционала сайта-справочника о музыке. Я взял за тему stoner и реализовал следующий функционал:

- на общей странице можно посмотреть все доступные релизы. Они отсортированы от новейших к самым старым. На странице есть пагинация с выбором количества альбом на странице. Работает корректно для подсчета количества страниц для количества альбомов на каждой странице, но есть недочеты в отображение корректного колиства на каждой странице. При клике на название альбома переходим на страницу с конкретной информацией по альбому, при клике на исполнителя/группу переходим на страницу исполнителя/группы с указанием дискографии;
- на странице "Дискографии" выборка альбомов группы отсортированная от новых к старым;
- на странице "Альбом" указана страна участников группы, треклист с продолжительностью каждого трека, состав и отзывы, взятые мною с bandcamp;

Для удобства в header сделал возвращение на главную через "Main Page", а в footer указал некоторые свои контакты. Проект учебный, вместо backend файлик base.json, из которого и берется вся информация для отображения. Вбивал сам, при deploy на github pages пришлось переделывать ссылки на картинки с расположенных в проекте на изображения из открытого доступа.<br />
В проекте использованы технологии react, react-router-dom и react-redux.


<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--1.jpg "/>
<b>Страница подборки альбомов</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--2.jpg "/>
<b>... её продолжение</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--3.jpg "/>
<b>Страница дискографии выбранного артиста</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--4.jpg "/>
<b>Страница информации по выбранному альбому</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--5.jpg "/>
<b>... её окончание</b>
<br />
