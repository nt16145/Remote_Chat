var refer = document.referrer;
console.log(refer);
if (!refer.match(/select_group.html$/) && !refer.match(/enter_group.html$/)) {
  window.location.href = 'not_allow.html'
}


var groupFormElement = document.getElementById('group-status');
var IdInputElement = document.getElementById('groupId');
var submitButtonElement = document.getElementById('submit');

submitButtonElement.addEventListener('click', initFirebaseAuth);

var firestore = firebase.firestore();

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      if (IdInputElement.value !== '') {
        firestore.collection('groups').where('groupId', '==', IdInputElement.value).get()
          .then(function (querySnapshot) {
            console.log(querySnapshot.size);
            if (!querySnapshot.empty) {
              querySnapshot.forEach(function (doc) {
                console.log('該当グループあり:', querySnapshot)
                var result = window.confirm(doc.data().groupName + 'に参加します。\nよろしいですか？');
                if (result) {
                  firestore.collection("groups").doc(doc.id).update({ groupMembers: firebase.firestore.FieldValue.arrayUnion(user.email) }).then(docRef => {
                    window.alert(doc.data().groupName + 'に参加しました！');
                    window.location.href = "select_group.html"
                  }).catch(error => {
                    // error
                  })
                }
              });
            } else {
              console.log('該当グループなし', querySnapshot)
              //this.validation.username = false
              window.alert('入力されたグループIDに一致するグループはありません');
            }
          })
          .catch((err) => {
            console.log(err)
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
