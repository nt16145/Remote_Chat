var refer = document.referrer;
if (!refer.match(/select_group.html$/) && !refer.match(/group_register.html$/)) {
  window.location.href = 'not_allow.html'
}

function ongroupFormSubmit(user_email) {
  firestore.collection("groups").add({
    groupName: NameInputElement.value,
    groupId: IdInputElement.value,
    groupOwner: user_email
  })
    .then(function (docRef) {
      console.log("グループの作成に成功->Document written with ID: ", docRef.id);
      window.alert('グループの作成に成功しました！');
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

const ratz = /[a-z]/, r0t9 = /[0-9]/;

function isValidPassword(str) {
  return ratz.test(str) || r0t9.test(str);
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      if (!isValidPassword(IdInputElement.value) || IdInputElement.value.length < 4) {
        console.log(isValidPassword(IdInputElement));
        console.log(IdInputElement.value.length);
        window.alert("グループIDの要件を満たしていません");
        return;
      }
      if (NameInputElement.value !== '' && IdInputElement.value !== '') {
        firestore.collection('groups').where('groupId', '==', IdInputElement.value).get()
          .then((querySnapshot) => {
            if (querySnapshot.empty) {
              //this.validation.username = true
              var user_email = user.email;
              firestore.collection('groups').where('groupOwner', '==', user_email).get()
                .then(snap => {
                  if (snap.size > 0) {
                    window.alert('1ユーザにつき、グループ作成は１つまでしかできません')
                  } else {
                    ongroupFormSubmit(user_email);
                  }
                });
            } else {
              console.log('重複するgroupId有り', querySnapshot);
              //this.validation.username = false
              window.alert('他のグループと重複するグループIDが入力されています');
            }
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        window.alert('未入力の欄があります');
      }
    } else {
      // No user is signed in.
      window.location.href = 'not_allow.html'
    }
  });
}
