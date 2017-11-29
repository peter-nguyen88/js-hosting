function prepareRequest(){
		$.ajax({
			url: 'https://wake.unixcoin.com/ico/info',
			type: 'GET',
			dataType: 'json',
			beforeSend: function () {
				console.log('Getting ICO Info');
			},
			success: function (data) {					
				console.log(data);
				var nextTime = parseInt(data.next_ico_date.from_timestamp);
				var diff = (nextTime - new Date().getTime());
				console.log(diff);
				setTimeout(function(){sendPostRequest();}, diff);
			},
			error: function (data) {
				console.log("Error!");
				console.log(data);				
			}
		});
	}
	
	prepareRequest();
	
	function sendPostRequest(){
		var datapost = {};
		datapost.unx_amount = 500;
		
		$.ajax({
			url: 'https://wake.unixcoin.com/ico',
			data: datapost,
			type: 'POST',
			dataType: 'json',
			beforeSend: function () {
				console.log('Sending Buy UNX Amount');
			},
			success: function (data) {							
				console.log(data);
			},
			error: function (data) {
				console.log("Error!");
				console.log(data);				
			}
		});
	}
