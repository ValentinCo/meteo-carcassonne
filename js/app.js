$.ajax({
	url: "http://api.openweathermap.org/data/2.5/forecast?units=metric&id=3028640&APPID=c123cc4c2bdf0100f0cfcfa555816f1e"
}).done(function (data) {
	$("#jour1").html("AUJOURD'HUI" + "<br>" + data.list[0].dt_txt+ "<br>"+ data.city.name +" "+ data.list[0].main.temp + "°C" + "<br>" 
+"température maximum "+ data.list[0].main.temp_max + "°C" +"<br>"+
"Humidité"+ " "+ data.list[0].main.humidity +"%" + "<br>"+ data.list[0].wind.speed +" "+ "m/s");

$("#jour2").html("DEMAIN"+"<br>"+data.list[8].dt_txt+ "<br>"+ data.city.name +" "+ data.list[8].main.temp + "°C" + "<br>"
+"température maximum "+ data.list[8].main.temp_max + "°C"+"<br>"+
"Humidité"+ " "+ data.list[8].main.humidity +"%" + "<br>"+ data.list[8].wind.speed +" "+ "m/s");

$("#jour3").html("APRES-DEMAIN"+"<br>"+data.list[16].dt_txt+  "<br>"+ data.city.name +" "+ data.list[16].main.temp + "°C" + "<br>"
+"température maximum "+ data.list[16].main.temp_max + "°C"+"<br>"+
"Humidité"+ " "+ data.list[16].main.humidity +"%" + "<br>"+ data.list[16].wind.speed +" "+ "m/s");
	
}).fail(function (arg2) {
	$('#jour1').html("Erreur!");
	$('#jour2').html("Erreur!");
	$('#jour3').html("Erreur!");
})