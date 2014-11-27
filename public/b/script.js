
$(document).ready(function() {

  cl("mousemove, space and click are logged to console");

  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });

  $(document).mousemove(function(event){
    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    cl(msg);
  });

  Mousetrap.bind('space', function() {
    cl('space');
  });

  $("#cover").on('click', function (){
    cl("click");
  })

});



// shortcut for console.log
function cl(data) {
    console.log(data);
}
