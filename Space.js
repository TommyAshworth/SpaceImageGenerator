const APILINK = 'https://api.nasa.gov/planetary/apod?api_key=DJSKtlq5zAVIJUV0oGZACjdSq03U5vuDq45bXMEo';
const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnSpace(APILINK);

function returnSpace(url) {
  fetch(url)
    .then(res => res.json())
    .then(function(data){
      const div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');

      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');

      const div_column = document.createElement('div');
      div_column.setAttribute('class', 'column');

      const image = document.createElement('img');
      image.setAttribute('class', 'thumbnail');
      image.setAttribute('id', 'image');

      const title = document.createElement('h3');
      title.setAttribute('id', 'title');

      title.innerHTML = `${data.title}`;
      image.src = data.url;

      div_card.appendChild(image);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);

      main.appendChild(div_row);
    })
    .catch(error => console.error(error));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnSpace(`https://api.nasa.gov/planetary/apod?api_key=DJSKtlq5zAVIJUV0oGZACjdSq03U5vuDq45bXMEo&date=${searchItem}`);
    search.value = '';
  }
});