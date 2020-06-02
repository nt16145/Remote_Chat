// login with mail server
/* function createUser() {
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPass').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
}*/

var provider = new firebase.auth.GoogleAuthProvider();

function authStateObserver(user) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location.href = 'select_group.html';
    } else {
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  });
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

initFirebaseAuth();