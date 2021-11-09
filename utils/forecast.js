const request=require("request")

const forecast=(latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=e95e89cca68a9939d5f251e0ee126f56&query=${latitude},${longitude}`
    request({url:url,json:true},(error,{body})=>{
        
        console.log(body)
        const{current}=body
        const {temperature,feelslike}=current
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error){
            callback("Unable to find this location",undefined)
        }
        else{
            callback(undefined,{temperature,feelslike})
        }
    })
}
module.exports=forecast

