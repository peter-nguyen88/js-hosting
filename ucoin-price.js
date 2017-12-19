GetOrderVolume = function () {
    var post = {};
    post.__RequestVerificationToken = token;
    post.blockchain = self.Blockchain;
    var url = orderAction.getOrderVolume;
    $.ajax({
        url: url,
        data: post,
        type: 'POST',
        dataType: 'json',
        beforeSend: function () {
			console.log('Sending');
        },
        success: function (data) {
            if (data.Data != null) {
                console.log(data.Data);
				var priceUSD = Number(parseFloat(data.Data.Price * data.Data.BTCPrice).toFixed(8));
				console.log('Price USD:' + priceUSD);
				console.log('Price BTC:' + data.Data.Price);
            }
        },
        error: function(data){
            GetOrderVolume();
        }
    });
};
GetOrderVolume();
setInterval(GetOrderVolume, 30000);
