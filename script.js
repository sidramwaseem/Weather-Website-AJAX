$(document).ready(function () {
  $("#searchInput").on("keyup", function (e) {
    var cityName = e.target.value;
    var API = "c7a9e78687d4f87bb32878918bfd6a1e";

    //Make the request to the server

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}`,
    }).done(function (weatherData) {
      console.log(weatherData);

      $("#profile").html(`
           <div class="row">
             <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
        `);
    });
  });
});
