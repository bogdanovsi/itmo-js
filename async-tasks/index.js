let result = '';

const values = Array.from(document.querySelectorAll('#values li'), li => li.innerHTML);
const URLs = Array.from(document.querySelectorAll('#urls li'), li => li.innerHTML);

document.querySelector('button').addEventListener('click', async ({ target: t }) => {
    URLs.forEach((url, i) => {
        const newUrl = `${url}/${values[i]}/${result}`.replace(/\/\//g, '/');

        const response = await fetch(newUrl);
        const html = await response.text();

        result = new DOMParser().parseFromString(html, 'text/html').getElementsByTagName('span')[0].innerHTML;
    });

    t.textContent = `Результат: ${result}`;
  }
); 