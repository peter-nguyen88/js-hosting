var correctCaptcha = function (t) {
    if ($('#div-captcha-check').length == 0) {
    var html = [];
    html.push('<div class="row-item" id="div-captcha-check">');
    html.push('<div class="left">Input captcha</div>');
    html.push('<div class="right">');
    html.push('<input type="text" name="captcha" class="form-control" placeholder="">');
    html.push('<img class="img-captcha" src="" /><i class="fa fa-refresh refresh-captcha"></i></div>');
    html.push('</div>');
    $(html.join('')).insertBefore('#google-check-bot');
    
    console.log('Reloading Captcha');
        
    refreshCaptcha();
    }
}

var refreshCaptcha = function(){
  var datapost = {};
  datapost.__RequestVerificationToken = __token;
  $.ajax({
      url: urlRefresh,
      data: datapost,
      type: 'POST',
      dataType: 'json',
      beforeSend: function () {

      },
      success: function (data) {          
          $('.img-captcha').attr('src', data.Data);
      },
      error: function (data) {
          refreshCaptcha();
      }
  });
}
