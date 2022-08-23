console.log("hello1 panel.js");
chrome.devtools.panels.create("Hoshell?",
"Perseverance.png",
"Panel.html",
function(panel) { 
    console.log("hello2 panel.js");
 });