


const form=document.querySelector("form")
const search=document.querySelector("input")
const temperature=document.querySelector("#temperature")
const feelsLike=document.querySelector("#feels-like")
const  locationParagraph=document.querySelector("#location")
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  const location=search.value
  console.log(location)
 if(location===""){
     return console.log("Please enter a valid location")
 }
 temperature.textContent="loading,please wait"
 feelsLike.textContent=""
 locationParagraph.textContent=""
  fetch(`/weather?address=${location}`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
 if(data.Error){
    temperature.textContent=data.Error
    feelsLike.textContent=""
    locationParagraph.textContent=""
}
else{
    temperature.textContent=`Temperature: ${data.temperature} degrees`
    feelsLike.textContent=`Feels like: ${data.feelslike} degrees`
    locationParagraph.textContent=`Location:${data.location}`

}
})

})
