var refer = document.referrer;
if (!refer.match(/login.html$/) && !refer.match(/group_register.html$/)) {
  window.location.href = 'not_allow.html'
}