var http =require('http');
var url="https://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=025ae1b35d2be3f6221da0192e7799ff";

http.createServer(function(request,response){
    //all logic goes here

    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<H1> Weather Api check </h1>");
        response.write("<h1> City Name: "+data['name'] + '<br>' + "</h1");
        response.write("<h2> Temperature: "+data.main['temp'] + '<br>' + "</h2");
        response.write("<h2> Sunset Time: "+new Date(data.sys['sunset']+1000) + "</h2");
        console.log(body);
        response.end()
    });
   
}).listen(8080)
