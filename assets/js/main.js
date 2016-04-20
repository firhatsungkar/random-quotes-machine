(function($){
  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
  
  $(document).ready(function(){
    getQuote();
  });
  
  $("#generate").on("click", function(e){
    e.preventDefault();
    getQuote();
  });
  
  
  function getQuote()
  {
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
      type: "POST",
      dataType: "json",
      headers: {"X-Mashape-Key" : "IUsh6fetBSmsh7S53s6dVHSzb1k3p1MrXXnjsnIr7lSFbVRODy",
               "Content-Type" : "application/x-www-form-urlencoded",
               "Accept" : "application/json"}
    })
    .done(function (data){
      var result = data,
          tweet = result.quote.split(" ").join("+")+" - "+result.author.split(" ").join("+");
      $(".qod-text").text(result.quote).animateCss("rubberBand");
      $(".qod-author").text(result.author);
      $("#twitter").attr("href","http://twitter.com/home?status="+tweet)
    });
  }
})(jQuery);