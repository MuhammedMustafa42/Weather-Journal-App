// Personal API Key for OpenWeatherMap API
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=9ce238032d95fa5b8e604c18ed47da6e&units=imperial";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 + "." + d.getDate() + "." + d.getFullYear();
let day = d.getDay();
const week=["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];
let dayName = week[day-1];
const searchButton = document.getElementById("generate");
const outputs = document.getElementById("disp");
// const city = document.getElementById("cityname");
// const temperature = document.getElementById("temp");
// const descript = document.getElementById("description");
// const icon = document.getElementById("wicon");

// Event listener to add function to existing HTML DOM element
searchButton.addEventListener("click", function performAction(event) {
  /* Function called by event listener */
  event.preventDefault();
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelingsinput").value;
  /* Function to GET Web API Data*/
  async function getWeather() {
    const res = await fetch(baseURL + zipCode + apiKey);
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }

  getWeather()
    .then(function (data) {
      // postData('/add', data)
      postData("/add", {
        cityName: data.name,
        currentDay: day,
        currentDate: newDate,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        temperature: Math.round(data.main.temp),
        feeling: feelings,
      });
      updateUi();
    })
  outputs.style.opacity = "1";
});

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
/* Function to GET Project Data */
const updateUi = async () => {
  const request = await fetch("/all");
  try {
    const appData = await request.json();
    document.getElementById("cityname").innerHTML = appData.cityName;
    document.getElementById("day").innerHTML = dayName;
    document.getElementById("date").innerHTML = newDate;
    document.getElementById("temp").innerHTML = `${appData.temperature}°F`;
    document.getElementById("feelingsoutput").innerHTML = appData.feeling;
    document.getElementById("weathericon").innerHTML = `<img id="wicon" src="http://openweathermap.org/img/wn/${appData.icon}@2x.png">`;
    document.getElementById("description").innerHTML = appData.description;
    
  } catch (error) {
    console.log("error", error);
  }
};
