
// global vars
var id = $('body').attr('id');
var results = $('.results');

// what a in menu will be current
var menuActive = function () {
	var links = $('nav.navbar ul li a');

	Array.prototype.forEach.call(links, function (link) {
		var txt = $(link).text();
		if (id === txt) {
			$(link).parent().addClass('active');
		}
	});
};

// time
var time = function() {
  var now = moment().format('MMM Do YYYY, h:mma');
  var el = $('.time h6');
  el.append(now);
};

// find out forecast for city
var weather = function () {
	if (id === 'capitals') {
		var btn = $('.send');
		var msgErr;

		btn.on('click', function () {
			var inputVal = $('input').val();

			if (!inputVal) {
				msgErr = `<div class="alert alert-danger" role="alert"><strong>Type name of city</strong></div>`;
				results.html(msgErr);
				return;

			} else {
				var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + inputVal + '&mode=json&units=metric' + '&appid=53fbad07bcfabedd0dda441894b94b3b';

				$.ajax({
					statusCode: {
						404: function () {
							msgErr = `<div class="alert alert-danger" role="alert"><strong>error</strong></div>`;
							results.html(msgErr);
							return;
						}
					},
					type: 'GET',
					url: url,
					contentType: "application/json",
					dataType: 'jsonp',
					success: function (data) {
						showWeather(data);
					},
					error: function (xhr, status, error) {
						console.log(xhr.status);
					}
				});
			}
		});
	}
};

// show weather to current location
var geolocationWeather = function () {
	if (id === 'geolocation') {
		$.getJSON('http://ipinfo.io', function (data) {
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + data.city + '&mode=json&units=metric' + '&appid=53fbad07bcfabedd0dda441894b94b3b';
			$.getJSON(url, function (data) {
				showWeather(data);
			});
		});
	}
};

// init
menuActive();
time();
weather();
geolocationWeather();

// show weather function
function showWeather(data) {
	var results = $('.results');
	var iconCode = data.weather[0].icon;
	var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

	var city = data.name;
	var country = data.sys.country;
	var temp = Math.round(data.main.temp);
	var tempMax = Math.round(data.main.temp_max);
	var weather = data.weather[0].description;
	var pressure = Math.round(data.main.pressure);
	var clouds = Math.round(data.clouds.all);
	var wind = Math.round(data.wind.speed);


	var card = `
  <div class="card text-center">
    <div class="card-block">
      <h4 class="card-title">${city}, ${country}</h4>
      <div class="weather_icon">
        <img src="${iconUrl}">
      </div>

      <p class="card-text">temp: <strong>${temp}</strong> degs, temp max: <strong>${tempMax}</strong> degs</p>
      <p class="card-text">clouds: <strong>${clouds}</strong>, wind speed: <strong>${wind}</strong></p>
      <p class="card-text">weather: <strong>${weather}</strong>, pressure: <strong>${pressure}</strong></p>
    </div>
  </div>
  `;

	results.html(card);
}
