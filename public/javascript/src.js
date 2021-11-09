


const form=document.querySelector("form")
const search=document.querySelector("input")
const weatherDescription=document.querySelector("#weather-description")
const temperature=document.querySelector("#temperature")
const observationTime=document.querySelector("#observation-time")
const  locationParagraph=document.querySelector("#location")
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  const location=search.value
  console.log(location)
 if(location===""){
     return console.log("Please enter a valid location")
 }
 temperature.textContent="loading,please wait"
//  feelsLike.textContent=""
//  locationParagraph.textContent=""
  fetch(`/weather?address=${location}`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
 if(data.Error){
    temperature.textContent=data.Error
    // feelsLike.textContent=""
    // locationParagraph.textContent=""
}
else{
    weatherDescription.innerHTML=`<p>It is ${data.weather_descriptions[0]}</p>
                                  <img src=${data.weather_icons[0]} alt="photo that describes the weather"/>`
    temperature.textContent=`Temperature: ${data.temperature} degrees ,feels like: ${data.feelslike}`
    observationTime.textContent=`Observation time: ${data.observation_time} `
    locationParagraph.textContent=`Location:${data.location}`
    
}
})

})
