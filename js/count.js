 /*API Maungaji*/
var url = "http://13.59.145.203:8000/v1/landing";

$.get(url, function(res){
	  
	let data = res.data

	$.each(data, function( key, value ) {

	if(value.name == 'SANTRI'){
	
		document.getElementById("student").innerHTML = value.name;

		document.getElementById("count").innerHTML   = value.count;
	
	} else if(value.name == 'GURU NGAJI'){
	
		document.getElementById("teacher").innerHTML	  = value.name;

		document.getElementById("teacherCount").innerHTML = value.count;	

	} else{

		document.getElementById("meet").innerHTML	   = value.name;

		document.getElementById("meetCount").innerHTML = value.count;

	}

	});
});