
$(document).ready(function() {
  var animations = [
    "shake",
    "rotate",
    "grow",
    "disappear"
  ];

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  $(".main-container").on("click", function() {
    var crack = this;
    var animation = animations[getRandomInt(0, 3)];



  }

  )
  // when image is clicked,
  // add random animation class to image
  // setTimeOut (remove class and set the time)

});





$( "#cracker-1" ).click(function() {
  $( "#cracker-1" ).animate({
    left: "+=20",
    height: 'toggle'
  }, 2000, function() {
    // Animation complete.
  });
});
