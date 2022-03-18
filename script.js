$(document).ready(function () {

  var typed = new Typed('.typed', {
    strings: ['the Future', 'The Weather', 'how will be your mood today'],
    smartBackspace: true, // Default value
    loop: true, // Default value
    typeSpeed: 60, 
    backSpeed: 50,
    startDelay:10,
  });

  $("#searchInput").on("keyup", function (e) {
    var cityName = e.target.value;
    var API = "c7a9e78687d4f87bb32878918bfd6a1e";

    //Make the request to the server

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric`,
    }).done(function (weatherData) {
      console.log(weatherData);

      $("#profile").html(`
      <div class="container">
      <div class="row">
  <div class="card" style="width: 18rem;">
     <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Weather: ${weatherData.weather[0].description}</h5>
       <h3>${cityName}</h3>
      <p>Temperature: ${weatherData.main.temp}&#8451</p>
      <p>Feels Like: ${weatherData.main.feels_like}&#8451</p>
      <a target="_blank" href="https://www.google.com/search?q=${cityName}"
      class="btn btn-primary">Learn More about this place</a>
     </div>
   </div>
 </div>
      
      </div>
        `);
    });
  });
});
