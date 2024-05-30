const apikey="f3035b4aa405287b8effb867bb97da85";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const x=document.querySelector(".search input");
const y=document.querySelector(".search button");
let z=document.querySelector(".weathericon");
let a=document.getElementsByClassName(".weather");

async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data= await response.json();
    if(data.name!=undefined){
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed+"kmph";
    
    if(data.weather[0].main=="Clouds"){
        z.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){

        z.src="images/rain.png";
    }
    else if(data.weather[0].main=="Clear"){

        z.src="images/clear.png";
    }
    else if(data.weather[0].main=="Mist"){

        z.src="images/mist.png";
    }
    else if(data.weather[0].main=="Drizzle"){

        z.src="images/drizzle.png";
    }
    
}
else{
    window.alert("enter correct city name")
}

}
y.addEventListener("click",()=>{
   
        checkweather(x.value);

})

