// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJApA1Q2fwTkCeWFD0M_1EBPSXawnB758",
  authDomain: "train-scheduler-7525a.firebaseapp.com",
  databaseURL: "https://train-scheduler-7525a.firebaseio.com",
  projectId: "train-scheduler-7525a",
  storageBucket: "",
  messagingSenderId: "768471784199"
};

firebase.initializeApp(config);

  //not explained the you need to do inital values of variables first
  var train = "";
  var destination = "";
  //not sure how to do time in javascript
  var time = 0;
  var frequency = 0;
  var nextArrival = 0;
  var minutesAway = "";
  var firstTime = "";


  // Create a variable to reference the database
  var database = firebase.database();

  function startTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    //we want time in regular time, not military so need to check for am/pm and change hours
    if (h > 12) {
      h = h - 12;
      var y = "PM";
    }

    else {
      var y = "AM";
      
    }

    // $("#timer").html(h + ":" + m);
    document.getElementById("timer").innerHTML =  h + ":" + m + ":" + s + y;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  // Capture Button Click
  $("#add-train").on("click", function() {
    // Don't refresh the page!
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent train information
    train = $("#trainname-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    firstTime = $("#firsttime-input").val().trim();
    
    // Don't forget to provide initial data to your Firebase database. - set replaces old data
    //if you want to add more users than just the latest one, then use push
    //database.ref().set({
    database.ref().push({
      formtrain: train,
      formdestination: destination,
      formfrequency: frequency,
      formfirsttime: firstTime,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
      //this is added so we can get most resent user so we can get most recent user to brower and to do this we need to change the listener  
    })

    // Alert
    alert("Train was successfully added");

    // Clears all of the text-boxes
    $("#trainname-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#firsttime-input").val("");

    
      
  });


  // Firebase watcher + initial loader HINT: .on("value")
  // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {  
    //determine Next Arrival
    // Assumptions
    // var tFrequency = 3;

    // // Time is 3:30 AM
    // var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm a"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log("Remainder: " + tRemainder);

    // Minutes Away
    var minutesAway = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + minutesAway);

    // Next Train Arrival
    var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm a");
    console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm a"));

    //determin Minutes Away

    //want to push to table to add new train 
    //add new table row
    //add new train information into row
    // Add each train's data into the table row
  $("#train-table > tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
  // $("#trainname-display").append(snapshot.val().formtrain);
  // $("#destination-display").append(snapshot.val().formdestination);
  // $("#frequency-display").append(snapshot.val().formfrequency);
  // $("#arrivaltime-display").append(nextArrival);
  // $("#minaway-display").append(minutesAway);
  console.log(childSnapshot.val().formtrain);
  console.log(childSnapshot.val().formdestination);
  console.log(childSnapshot.val().formfrequency);
  console.log(nextArrival);
  console.log(minutesAway);
    
  })

  

  // Create Error Handling

  // function(errorObject) {
  // console.log("The read failed: " + errorObject.code);
  // }

