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
  var arrival = 0;
  var minaway = 0;


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
    arrival = $("#arrivaltime-input").val().trim();
    
    // Don't forget to provide initial data to your Firebase database. - set replaces old data
    //if you want to add more users than just the latest one, then use push
    //database.ref().set({
    database.ref().push({
      formtrain: train,
      formdestination: destination,
      formfrequency: frequency,
      formarrival: arrival,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
      //this is added so we can get most resent user so we can get most recent user to brower and to do this we need to change the listener  
    })
      
  });


  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    console.log(snapshot.val());
    $("#trainname-display").text(snapshot.val().formtrain);
    console.log(snapshot.val().formtrain);
    $("#destination-display").text(snapshot.val().formdestination);
    console.log(snapshot.val().formdestination);
    $("#frequency-display").text(snapshot.val().formfrequency);
    console.log(snapshot.val().formfrequency);
    $("#arrivaltime-display").text(snapshot.val().formarrival);
    console.log(snapshot.val().formarrival);
    
  })

  // Create Error Handling

  // function(errorObject) {
  // console.log("The read failed: " + errorObject.code);
  // }

