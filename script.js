function addRecommendation() {
  // Get the value typed by the user
  let text = document.getElementById("newRec").value;

  // If the input is not empty
  if (text !== "") {
    // Make a new list item
    let item = document.createElement("li");

    // Put the user's text into the list item
    item.innerText = text;

    // Add the item to the list
    document.getElementById("recommendation-list").appendChild(item);

    // Show a thank you message
    alert("Thank you! Your recommendation has been added.");

    // Clear the input box
    document.getElementById("newRec").value = "";
  } else {
    // Show message if the input is empty
    alert("Please type something first.");
  }
}

