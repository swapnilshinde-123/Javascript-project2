const apikey = "aef1c35a509e4830dff4c372571be48c";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiURL + city +`&appid=${apikey}`);
  
  
    if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }
   else{
    
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".hum").innerHTML =data.main.humidity + "%";
    document.querySelector(".win").innerHTML =data.wind.speed + "km/h";

   document.querySelector(".error").style.display = "none";
   document.querySelector(".weather").style.display = "block";
   }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})


