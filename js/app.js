//click on image to enlarge
// make background dark
// center image
// revert back to normal when clicked
var $overlay = $("<div id="overlay"></div>");
var $image = $('<img>');
var $caption = $('<p></p>');

//2 add overlay
$overlay.append($image);
//add caption
$overlay.append($caption);

$("body").append($overlay);



$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href"); // will return string of href
  //1.2 update the overlay with the image linked in the link
$image.attr("src", imageLocation);




// show the overlay

$overlay.show();
});



//3 when overlay is clicked

$overlay.click(function(){
  $overlay.hide();
});
  //3.1 hide overlay
