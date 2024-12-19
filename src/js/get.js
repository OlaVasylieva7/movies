const allBtn = document.getElementById('all-button');
const moviesList = document.getElementById('movies__container');

allBtn.addEventListener('click', allBtnClick);

const BASE_URL = 'http://localhost:3000';

async function fetchMovies() {
  const response = await fetch(`${BASE_URL}/movies`);

  if (!response.ok) {
    throw new Error('failed to fetch');
  }
  return await response.json();
}

async function allBtnClick() {
  try {
    const movies = await fetchMovies();
    renderMovies(movies);
  } catch (error) {
    console.error('failed to render')
  }
}

function renderMovies(movies) {
  const markUp = movies
    .map(({img, title, genre, year, id}) => ` <li class="movies__item">
  <div>
    <img class="movies__image" src="${img}" alt="#"  onerror="this.src='https://via.placeholder.com/150';" />
    <h2 class="movies__title"><b>Title: </b>${title}</h2>
    <p class="movies__genre"><b>Genre: </b>${genre}</p>
    <p class="movies__year"><b>Year: </b>${year}</p>
  </div>
  <div>
      <button class="movies__item-btn" type="button" id="edit">edit</button>
      <button class="movies__item-btn" type="button" id="${id}">delete</button>
  </div>
</li>`
    )
    .join('');

  moviesList.insertAdjacentHTML('beforeend', markUp);
}
