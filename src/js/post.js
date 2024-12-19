const BASE_URL = 'http://localhost:3000';

const form = document.getElementById('form');
form.addEventListener('submit', onFormSubmit);

function postMovie(newMovie) {
  const options = {
    method: 'POST',
    body: JSON.stringify(newMovie),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${BASE_URL}/movies`, options).then(response => {
    if (!response.ok) {
      throw new Error('failed to post');
    }
    return response.json();
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const newMovie = {};
  formData.forEach((value, key) => {
    newMovie[key] = value;
  });

  postMovie(newMovie)
    .then(() => {
      allert('movie added');
    })
    .catch(error => {
      console.error('failed to add');
    });
}

