var refer = document.referrer;
console.log(refer);
if (!refer.match(/select_group.html$/) && !refer.match(/group_register.html$/) && !refer.match(/group_register.html?$/)) {
  window.location.href = 'not_allow.html'
}


function ongroupFormSubmit(user_uid) {
  console.log("実行");
  firestore.collection("groups").add({
      groupName: NameInputElement.value,
      groupId: IdInputElement.value,
      groupOwner: user_uid
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.location.href = 'select_group.html'
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}


var groupFormElement = document.getElementById('group-status');
var NameInputElement = document.getElementById('groupName');
var IdInputElement = document.getElementById('groupId');
var submitButtonElement = document.getElementById('submit');

submitButtonElement.addEventListener('click', initFirebaseAuth);

var firestore = firebase.firestore();

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var user_uid = user.uid;
      ongroupFormSubmit(user_uid);
    } else {
      // No user is signed in.
    }
  });
}
