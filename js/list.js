var itemInput = document.getElementById("newItem");
var costInput = document.getElementById("costEstimate");
var addItemButton = document.getElementById("addItemButton");
// var addButton = document.getElementsByTagName("button")[0];
var listBuild = document.getElementById("shoppingList");
var totalPrice = document.getElementById("totalCost");

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

myarr.push(costInput.value);
itemInput.value = " ";
costInput.value = null; // clear field one submit button is pressed
itemInput.focus();
arrToIntegers(myarr); // calling function below – works! Visible in console
// totalCost(myarr);
var total = myarr.reduce(function(a, b) { // add values in array together
  return a + b;
}, 0);
// var p = document.createElement("p"); // instead of creating element.. just update!!!
// totalPrice.appendChild(p);
totalPrice.innerHTML = "$ " + total;

}

var myarr = [];

// change array values from strings to integers
function arrToIntegers() {
for (var i=0; i<myarr.length; i++) {
    myarr[i] = parseInt(myarr[i], 10);
    console.log(myarr);
}
}


addItemButton.onclick = addItem;
