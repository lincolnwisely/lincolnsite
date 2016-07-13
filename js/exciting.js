var selectButton = document.getElementById("submit");
selectButton.addEventListener("click", myFunction, false);




function myFunction() {
	var phrase = prompt("Enter a phrase. I'll make it more exciting for you.");
  phrase = phrase.toUpperCase() + "!!!";
  document.getElementById("theDiv").innerHTML = phrase;
  document.getElementById('submit').innerHTML= "Have another go.";

}







// var string = getElementById("userPhrase");
//
// function makeMoreExciting() {
// string.toUpperCase();
// }
//
// function yellIt() {
//   string.toUpperCase();
//   return string;
// }
//
// yellIt("wtf");
// document.getElementById("theDiv").textContent = userPhrase(yellIt);
//
//
//
//
//
// button.onclick=function(){
//   document.getElementId("userPhrase").value = document.getElementById("theDiv");
// }
//
// function myFunction() {
//     document.getElementById("para").textContent = document.getElementById("userPhrase").value
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
// <!-- button.onclick=function(){
//   document.getElementId("userPhrase").value = document.getElementById("theDiv");
// } -->
//
//
// <!--
// document.getElementById("theDiv").textContent = document.getElementById(yellIt(string));
//
//
//
// var button = document.getElementById("submit"),
// value =  button.form.valueId.value;
// button.onclick = function() {
//     foo(value);
// } -->
//
//
//
//
//
//
// document.write(phrase);
//
//
// <!--
// var string = document.getElementById("field1");
//
// function makeMoreExciting(string) {
// return string + "!!!";
// }
//
// function yellIt(string) {
//   string = string.toUpperCase();
//   return makeMoreExciting(string);
// }
//
// function myFunction() {
//     document.getElementById("para").textContent  = document.getElementById("field1").value;
//
// }
//  -->
