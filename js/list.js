var itemInput = document.getElementById("newItem");
var costInput = document.getElementById("costEstimate");
var addItemButton = document.getElementById("addItemButton");
// var addButton = document.getElementsByTagName("button")[0];
var listBuild = document.getElementById("shoppingList");
var totalPrice = document.getElementById("totalCost");
var total = myarr.reduce(function(a, b) {
  return a + b;
}, 0);

// function addTo() {
//    myarr.push(document.getElementById("costEstimate").value);
//    console.log(myarr); //to confirm it has been added to the array
// }

// VARIABLE TO CONVERT ARRAY TO NUMBER (or function??)
// Function TO TOTAL ARRAY
// FUNCTION TO ADD TOTAL TO #totalCOST SOMEHOW ON CLICK.... HMMMM...


var addItem = function() {
var item = itemInput.value;
var cost = costInput.value;
var li = document.createElement("li");
li.innerHTML = item + ": " + "$" + cost;
console.log(cost);
listBuild.appendChild(li);
var p = document.createElement("p");
p.innerHTML = "$ " + cost;
totalPrice.appendChild(p);
myarr.push(costInput.value);
itemInput.value = " ";
costInput.value = null;
itemInput.focus();
arrToIntegers(myarr);
// totalCost(myarr);
console.log(total);

// costInput.value = " ";
}

var myarr = [];

function arrToIntegers() {
for (var i=0; i<myarr.length; i++) {
    myarr[i] = parseInt(myarr[i], 10);
    console.log(myarr);
}
}



addItemButton.onclick = addItem;


function totalCost() {
for ( var i = 0; i < myarr.length; i++ ){
 total + myarr[i];
 }
 }
