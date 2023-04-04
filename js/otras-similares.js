const API_KEY = "9229c77a9849ece36f4647f053986172";
const contenedor = document.querySelector('.container')
const endPointOtrasSimilares = `https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${API_KEY}&language=es-ES&page=1`



fetch(endPointOtrasSimilares)
.then(function (response) {
  return response.json();
})
.then(function (data) {
console.log(data.results);
data.results.forEach(element =>  {
//    console.log(element)
contenedor.innerHTML +=  `
<article class="box1">
<img src="https://image.tmdb.org/t/p/w342/${element.backdrop_path}" width="500%"></a>
<p class="nombre"><strong>${element.title}</strong></p>
<p class="descripcion">${element.release_date}<br>
<a href="https://api.themoviedb.org/3/movie/{movie_id}/release_dates?api_key=${API_KEY}">Ver más</a>
                                   
   
</article>`     
});
})
.catch(function (error) {
  console.log(error);
});
