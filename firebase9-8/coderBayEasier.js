// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
    apiKey: "AIzaSyDFqTQB0ms1OZHE8Pdds3V6b2ipWjWptz0",
    authDomain: "my-even-awesomer-project.firebaseapp.com",
    databaseURL: "https://my-even-awesomer-project.firebaseio.com",
    projectId: "my-even-awesomer-project",
    storageBucket: "my-even-awesomer-project.appspot.com",
    messagingSenderId: "728654586707"
  };

  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
 var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
var info = snaspshot.val();
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
    highPrice = info.highPrice;
    highBidder = info.highBidder;

    
  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {
        highPrice = initialBid;
        highBidder = initialBidder;
  }
 // Change the HTML to reflect the initial values
  $('#highest-bidder').text(highBidder)
  $('#highest-price').text(highPrice)

    // Print the data to the console.
    console.log(
        "High Bidder: " + highBidder +
        "\nHigh Bid: " + highPrice
    )

// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});


