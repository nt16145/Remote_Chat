var refer = document.referrer;
if (!refer.match(/login.html$/)) {
  window.location.href = 'not_allow.html'
}