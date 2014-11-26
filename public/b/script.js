
$(document).ready(function() {

  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });

  $(document).mousemove(function(event){
    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    cl(msg);
  });
  
});


// shortcut for console.log
function cl(data) {
    console.log(data);
}
