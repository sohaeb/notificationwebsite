'use strict';

// Shortcuts to DOM Elements.
var messageInput = document.getElementById('new-post-message'); //this
var titleInput = document.getElementById('new-post-title'); //this
var nameInput = document.getElementById('user-name'); //this
var idInput = document.getElementById('user-id'); //this
var messageForm = document.getElementById('message-form');
var loginForm = document.getElementById('login-form');
var signInButton = document.getElementById('sign-in-button');
var splashPage = document.getElementById('page-splash');
var username = document.getElementById('sample1');
var password = document.getElementById('sample2');

var wic_auth = firebase.auth();

function checkIfExist(id, name, title, text) {
  console.log("Called checkIfExist")
  /*firebase.database().ref('/users/').once('value').then(function(snapshot) {
  var username = snapshot.val().username;
});*/

  var hijra_Mosque_Database = hijrah_mosque.database().ref("server/notifications");
  var hijra_school_Database = hijra_school.database().ref("server/notifications");
  var noor_school_Database = noor_shcool.database().ref("server/notifications");
  var wia_Database = wia.database().ref("server/notifications");
  var uwindsormsa_Database = uwindsormsa.database().ref("server/notifications");
  var wic_database = firebase.database().ref("server/notifications");
  //
  // Read Data From DB
  //
  firebase.database().ref("server").child("users").once("value", function (snapshot) {
    console.log("Called .once")
    console.log(snapshot.val());
    if (snapshot.hasChild(id)) {
      console.log("id exists");
      var payload = {
        title: title,
        text: text
      }

      switch (name) {
        case "wic":
          wic_database.update(payload, function (error) {
            if (error) {
              console.log("wic_database: payload of notification could not be saved." + error);
            } else {
              console.log("wic_database: payload of notification saved successfully.");
            }
          });
          break;

        case "noor":
          noor_school_Database.update(payload, function (error) {
            if (error) {
              console.log("noor_school_Database: payload of notification could not be saved." + error);
            } else {
              console.log("noor_school_Database: payload of notification saved successfully.");
            }
          });
          break;

        case "hijrah_school":
          hijra_school_Database.update(payload, function (error) {
            if (error) {
              console.log("hijra_school_Database: payload of notification could not be saved." + error);
            } else {
              console.log("hijra_school_Database: payload of notification saved successfully.");
            }
          });
          break;

        case "hijrah_mosque":
          hijra_Mosque_Database.update(payload, function (error) {
            if (error) {
              console.log("hijra_Mosque_Database: payload of notification could not be saved." + error);
            } else {
              console.log("hijra_Mosque_Database: payload of notification saved successfully.");
            }
          });
          break;

        case "uwindsormsa":
          uwindsormsa_Database.update(payload, function (error) {
            if (error) {
              console.log("uwindsormsa_Database: payload of notification could not be saved." + error);
            } else {
              console.log("uwindsormsa_Database: payload of notification saved successfully.");
            }
          });
          break;

        case "wia":
          wia_Database.update(payload, function (error) {
            if (error) {
              console.log("wia_Database: payload of notification could not be saved." + error);
            } else {
              console.log("wia_Database: payload of notification saved successfully.");
            }
          });
          break;

        default:
          console.log("failed to send through switch statement")
          break;
      }
    } else {
      console.log("chile id doesn't exist")
    }
  });
}

var currentUID;

// save user name and id to DB

function onAuthStateChanged(user) {
  
  // We ignore token refresh events.
  if (user && currentUID === user.uid) {
    return;
  }

  // cleanupUi();

  if (user) {
    currentUID = user.uid;
    splashPage.style.display = 'none';
    
    // writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    // startDatabaseQueries();
  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    splashPage.style.display = '';
  }
}

// Bindings on load.
window.addEventListener('load', function() {
  // Bind Sign in button.
  signInButton.addEventListener('click', function() {



wic_auth.signInWithEmailAndPassword(username.value, password.value)
   .then(function(firebaseUser) {
       console.log("success")
   })
  .catch(function(error) {
       console.log("error")
  });



  firebase.auth().onAuthStateChanged(onAuthStateChanged);


  hijrah_mosque.auth().signInWithEmailAndPassword(username.value, password.value)
   .then(function(firebaseUser) {
       console.log("success")
   })
  .catch(function(error) {
       console.log("error")
  });



  hijra_school.auth().signInWithEmailAndPassword(username.value, password.value)
   .then(function(firebaseUser) {
       console.log("success")
   })
  .catch(function(error) {
       console.log("error")
  });



  noor_shcool.auth().signInWithEmailAndPassword(username.value, password.value)
   .then(function(firebaseUser) {
       console.log("success")
   })
  .catch(function(error) {
       console.log("error")
  });



  wia.auth().signInWithEmailAndPassword(username.value, password.value)
   .then(function(firebaseUser) {
       console.log("success")
   }).catch(function(error) {
       console.log("error")
  });


  });

  // loginForm.

// Saves message on form submit.
messageForm.onsubmit = function (e) {
  e.preventDefault();
  console.log("Called")
  var text = messageInput.value;
  var user_name = nameInput.value;
  var title = titleInput.value;
  var user_id = idInput.value;

  if (text && title && user_name && user_id) {
    console.log("Called if")
    checkIfExist(user_id, user_name, title, text);

    messageInput.value = '';
    nameInput.value = '';
    titleInput.value = '';
    idInput.value = '';
  }
};

}, false);
