document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("but").addEventListener("click", handler);
});

function handler() {
  var link =document.getElementById("link").value;
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = link.match(regExp);
  var result =  (match&&match[7].length==11)? match[7] : false;
  //window.alert(result);
  //var iframe = document.getElementById("frame");

  chrome.tabs.executeScript(null, { file: "jquery.js" });
  chrome.tabs.executeScript(null, { file: "jquery-ui.js" });
  chrome.tabs.insertCSS(null, { file: "jquery-ui.css"});
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
  chrome.tabs.executeScript(activeTabs[0].id, { code: 'var x = document.createElement("div"); x.id="dialog"; x.innerHTML = "\
  <iframe id=%22frame%22 width=%22560%22 height=%22315%22 src=https://www.youtube.com/embed/'+result+' frameborder=%220%22 allowfullscreen></iframe>";\
  document.body.appendChild(x); $("#dialog").dialog();' });
    });
}    
  