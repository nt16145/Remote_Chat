var refer = document.referrer;
if (
  !refer.match(/login.html$/) &&
  !refer.match(/group_register.html$/) &&
  !refer.match(/enter_group.html$/)
) {
  window.location.href = "not_allow.html";
}

var firestore = firebase.firestore();

function getGrouplist() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      firestore
        .collection("groups")
        .where("groupOwner", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let template = document.querySelector("#groupTemplate");
            let tbody = document.querySelector("tbody");
            let clone = document.importNode(template.content, true);
            let th = clone.querySelector("th");
            let td = clone.querySelectorAll("td");
            td[0].textContent = doc.data().groupId;
            td[1].textContent = doc.data().groupName;
            tbody.appendChild(clone);
          });
        });
      firestore
        .collection("groups")
        .where("groupMember", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          console.log(querySnapshot.size);
          querySnapshot.forEach(function (doc) {
            let template = document.querySelector("#groupTemplate");
            let tbody = document.querySelector("tbody");
            let clone = document.importNode(template.content, true);
            let th = clone.querySelector("th");
            let td = clone.querySelectorAll("td");
            td[0].textContent = doc.data().groupId;
            td[1].textContent = doc.data().groupName;
            tbody.appendChild(clone);
          });
        });
    } else {
      window.location.href = "not_allow.html";
    }
  });
}

getGrouplist();

document.addEventListener("click", function (e) {
  var t = e.target;
  if (t.nodeName == "INPUT" && t.type == "button") {
    var a = Array.prototype.map
      .call(t.parentNode.parentNode.querySelectorAll("td"), function (n) {
        return n.textContent;
      })
      .filter(function (v) {
        return v !== "";
      });
    console.log(a);
  }
});
