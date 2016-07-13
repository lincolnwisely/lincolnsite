var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "img/lil-vince.png") {
    myImage.setAttribute('src', 'img/lil-tony.png');
    // console.log('Tony is naughty!');
    document.getElementById("theDiv").textContent = "Tony is naughty!";

  } else {
    myImage.setAttribute('src', 'img/lil-vince.png');
    document.getElementById("theDiv").textContent = "So is Vince!";

  }
}

// var shoutOut = document.querySelector('p');
//
// function setShoutOut() {
//   var vinceSO = "Vinny is the best!";
//   if ()
// }
