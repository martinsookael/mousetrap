
var is = true;

$(document).ready(function() {

  cl("mousemove, space and click are logged to console");

  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });

  $(document).mousemove(function(event){
    showDialog();

    if(is === true) {
      hideDialog();
      is = false;
    }

    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    cl(msg);
  });

  $(document).click(function(event){
    showDialog();

    if(is === true) {
      hideDialog();
      is = false;
    }

    var msg = "Click at ";
    msg += event.pageX + ", " + event.pageY;
    cl(msg);
  });



  function hideDialog() {
    setTimeout(function(){
      $("#dialog").fadeOut().addClass("hidden");
      $("#cover").css("z-index", "2");
      is = true;
    }, 3000);
  }

  function showDialog() {
    $("#dialog").removeClass("hidden").fadeIn();
    $("#cover").css("z-index", "0");
  }

  Mousetrap.bind('space', function() {
    cl('space');
  });

  $("#cover").on('click', function (){
    cl("click");
  })

  $("#dialog").on('click', function() {
    cl("dialog");
  })

  $("#b1").on('click', function() {
    cl("button 1");
  })

  $("#b2").on('click', function() {
    cl("button 2");
  })




});



// shortcut for console.log
function cl(data) {
    console.log(data);
}
