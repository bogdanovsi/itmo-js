let result = '';
// const values = ... извлеките из первого списка
// const URLs = ... извлеките из второго списка



document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    // здесь напишите код, последовательно отправляющий запросы
    // согласно спецификации kodaktor.ru/async_tasks
    t.textContent = `Результат: ${result}`;
  }
); 