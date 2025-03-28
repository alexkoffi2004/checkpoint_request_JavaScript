const apiKey = 'TA_CLE_API'; // Remplace par ta clé OpenWeatherMap

function chercherMeteo() {
  const city = document.getElementById('cityInput').value.trim();
  if (city === "") {
    alert("Veuillez entrer un nom de ville !");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Ville non trouvée !");
      }
      return response.json();
    })
    .then(data => {
      afficherMeteo(data);
    })
    .catch(error => {
      console.error("Erreur :", error);
      document.getElementById('weatherResult').innerHTML = `<p>🌧️ ${error.message}</p>`;
    });
}

function afficherMeteo(data) {
  const { name, main, weather, sys } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;
  const condition = weather[0].main.toLowerCase();
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString('fr-FR');
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString('fr-FR');

  changerFond(condition);

  document.getElementById('weatherResult').innerHTML = `
    <p><strong>Ville :</strong> ${name}</p>
    <p><strong>Température :</strong> ${temperature} °C</p>
    <p><strong>Météo :</strong> ${description}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Icône météo">
    <p><strong>Lever du soleil :</strong> ${sunrise}</p>
    <p><strong>Coucher du soleil :</strong> ${sunset}</p>
  `;
}

function changerFond(condition) {
  const body = document.body;
  switch (condition) {
    case 'clear':
      body.style.background = 'linear-gradient(to right, #56ccf2, #2f80ed)';
      break;
    case 'clouds':
      body.style.background = 'linear-gradient(to right, #bdc3c7, #2c3e50)';
      break;
    case 'rain':
    case 'drizzle':
      body.style.background = 'linear-gradient(to right, #4e54c8, #8f94fb)';
      break;
    case 'thunderstorm':
      body.style.background = 'linear-gradient(to right, #373b44, #4286f4)';
      break;
    case 'snow':
      body.style.background = 'linear-gradient(to right, #83a4d4, #b6fbff)';
      break;
    default:
      body.style.background = '#8ac7e6';
  }
}

