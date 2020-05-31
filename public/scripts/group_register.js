var refer = document.referrer;
if (!refer.match(/select_group.html$/)) {
  window.location.href = 'not_allow.html'
}