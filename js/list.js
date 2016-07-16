var itemInput = document.getElementById("new-item");
var costInput = document.getElementById("cost");
var addButton = document.getElementsByTagName("button")[0];
var listBuild = document.getElementById("shoppingList");
var button = document.getElementById("addItemButton");


// add a new item

var createNewItemElement = function(itemString) {
    var listItem = document.createElement("li");
    var deleteButton = document.createElement("button");

    // Each element needs appending
 listItem.appendChild()
}

var addItem = function() {

var item = itemInput.value;
var cost = costInput.value;
var li = document.createElement("li");
li.innerHTML = item + ": " + cost;

shoppingList.appendChild(li);
}


    // when button is pressed
        // create new list item with the text from #new-item and estimated cost from #cost
            // label
            // button.delete

        // organize into categories


// organize by category




// delete existing item
var deleteItem = function() {


console.log("delete task...");

}



// total estimated cost
var totalCost = function() {
console.log("Total cost...");
// for each item added to list
// add estimated cost

for (var i=0; i < costInput.length; i++)
+=costInput;

}

addItemButton.onclick = addItem;
