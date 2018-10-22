'use strict';

// To add a new porject

// 0. Make sure you created the configs in index.html (copy it from firebase web app)

// 1. add it as a :
//                  var new_proj = value_in_HTML.database().ref("server/notifications");

// 2. add an auth:
/*
              value_in_HTML.auth().signInWithEmailAndPassword(username.value, password.value)
              .then(function(firebaseUser) {
                  console.log("success")
              })
              .catch(function(error) {
                  console.log("error")
              });

*/

// 3. Add value_in_HTML as a SWITCH case







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
var jumLoc1 = document.getElementById('jumuah-location-1');
var jumLoc2 = document.getElementById('jumuah-location-2');
var jumTim1 = document.getElementById('jumuah-timing-1');
var jumTim2 = document.getElementById('jumuah-timing-2');
var jumuahForm = document.getElementById('jumuah-form');



//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//


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


//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//


function checkIfExist(id, name, title, text) {
  console.log("Called checkIfExist")
  /*firebase.database().ref('/users/').once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  });*/

  // Shortcuts to DOM Elements.
  var wic = firebase

  var hijra_Mosque_Database = hijrah_mosque.database().ref("server/notifications");
  var hijra_school_Database = hijra_school.database().ref("server/notifications");
  var noor_school_Database = noor_shcool.database().ref("server/notifications");
  var wia_Database = wia.database().ref("server/notifications");
  var uwindsormsa_Database = uwindsormsa.database().ref("server/notifications");
  var wic_database = wic.database().ref("server/notifications");
  var wihs_Database = wihs.database().ref("server/notifications");
  // var altaqwa_database = altaqwa.database().ref("server/notifications");
  var londonislamicschool_database = londonislamicschool.database().ref("server/notifications");
  //
  // Read Data From DB
  //
  wic.database().ref("server").child("users").once("value", function (snapshot) {
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

        case "wihs":
          wihs_Database.update(payload, function (error) {
            if (error) {
              console.log("wihs_database: payload of notification could not be saved." + error);
            } else {
              console.log("wihs_database: payload of notification saved successfully.");
            }
          });
          break;

          // case "altaqwa":
          // altaqwa_database.update(payload, function (error) {
          //   if (error) {
          //     console.log("altaqwa: payload of notification could not be saved." + error);
          //   } else {
          //     console.log("altaqwa: payload of notification saved successfully.");
          //   }
          // });
          // break;

          case "londonislamicschool":
          londonislamicschool_database.update(payload, function (error) {
            if (error) {
              console.log("londonislamicschool: payload of notification could not be saved." + error);
            } else {
              console.log("londonislamicschool: payload of notification saved successfully.");
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



//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
var currentUID;

// save user name and id to DB

// Bindings on load.
window.addEventListener('load', function () {
  // Bind Sign in button.
  signInButton.addEventListener('click', function () {
    
    //---------------------
    // WIC auth()
    //---------------------
    wic.auth().signInWithEmailAndPassword(username.value, password.value)
      .then(function (firebaseUser) {
        console.log("wic.auth() is success")
      })
      .catch(function (error) {
        console.log("error" + error)
      });

    // This will launch login page 
    wic.auth().onAuthStateChanged(onAuthStateChanged);

    //---------------------
    // Mosque Hijrah auth()
    //---------------------
    hijrah_mosque.auth().signInWithEmailAndPassword(username.value, password.value)
      .then(function (firebaseUser) {
        console.log("hijrah_mosque success")
      })
      .catch(function (error) {
        console.log("error" + error)
      });

    //---------------------
    // uwindsormsa auth()
    //---------------------
    uwindsormsa.auth().signInWithEmailAndPassword(username.value, password.value)
    .then(function (firebaseUser) {
      console.log("uwindsormsa success")
    })
    .catch(function (error) {
      console.log("error" + error)
    });

    //---------------------
    // School Hijra auth()
    //---------------------
    hijra_school.auth().signInWithEmailAndPassword(username.value, password.value)
      .then(function (firebaseUser) {
        console.log("hijra_school success")
      })
      .catch(function (error) {
        console.log("error" + error)
      });

    //---------------------
    // Noor School auth()
    //---------------------
    noor_shcool.auth().signInWithEmailAndPassword(username.value, password.value)
      .then(function (firebaseUser) {
        console.log("noor_shcool success")
      })
      .catch(function (error) {
        console.log("error" + error)
      });


    //---------------------
    // WIA auth()
    //---------------------
    wia.auth().signInWithEmailAndPassword(username.value, password.value)
      .then(function (firebaseUser) {
        console.log("wia success")
      }).catch(function (error) {
        console.log("error" + error)
      });

    //---------------------
    // WIHS auth()
    //---------------------
    wihs.auth().signInWithEmailAndPassword(username.value, password.value)
      .then(function (firebaseUser) {
        console.log("wihs success")
      }).catch(function (error) {
        console.log("error" + error)
      });

      // altaqwa_database.auth().signInWithEmailAndPassword(username.value, password.value)
      // .then(function (firebaseUser) {
      //   console.log("wihs success")
      // }).catch(function (error) {
      //   console.log("error" + error)
      // });
      
      // londonislamicschool_database.auth().signInWithEmailAndPassword(username.value, password.value)
      // .then(function (firebaseUser) {
      //   console.log("wihs success")
      // }).catch(function (error) {
      //   console.log("error" + error)
      // });

  });



  function addToFireBaseDB(jL1,jL2,jT1,jT2){
    var uwindsormsa_Database = uwindsormsa.database().ref("server/jumuah");

    var payload = {
      first_jumuah_loction: jL1,
      first_jumuah_time: jT1,
      second_Jumuah_location: jL2,
      second_Jumuah_time: jT2
    }


    uwindsormsa_Database.update(payload, function (error) {
      if (error) {
        console.log("uwindsormsa_Database: payload of notification could not be saved." + error);
      } else {
        console.log("uwindsormsa_Database: payload of notification saved successfully.");
      }
    });

  }


  jumuahForm.onsubmit = function(e){
    e.preventDefault();
    console.log("Called jumuahForm")
    var jL1 = jumLoc1.value;
    var jL2 = jumLoc2.value;
    var jT1 = jumTim1.value;
    var jT2 = jumTim2.value;



    // if (jL1 && title && user_name && user_id) {
      // console.log("Called if")
      addToFireBaseDB(jL1, jL2, jT1, jT2);

      jumLoc1.value = '';
      jumLoc2.value = '';
      jumTim1.value = '';
      jumTim2.value = '';
    // }
  };



  // loginForm.
  
  // Saves message on form submit.
  messageForm.onsubmit = function (e) {
    e.preventDefault();
    console.log("Called messageForm")
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
