const express = require('express');
const path = require('path');
const app = express();


// Роут для главной страницы
app.get('/', (req, res) => {
  res.send([{name: 'halid', surname: 'aliev'}]);
});
// Роут для страницы о нас
app.get('/about', (req, res) => {
  res.send('О нас');
});

// Роут для страницы контактов
app.get('/contact', (req, res) => {
  res.send('Контакты');
});
console.log('hello');
// Установка порта сервера
const port = process.env.PORT || 5000;

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});