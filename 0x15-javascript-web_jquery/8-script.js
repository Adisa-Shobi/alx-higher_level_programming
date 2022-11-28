$.get('https://swapi-api.hbtn.io/api/films/?format=json',
  function (data, textSatus) {
    for (const item in data.results) {
      $('#list_movies').append('<li>' + data.results[item].title + '</li>');
    }
  });
