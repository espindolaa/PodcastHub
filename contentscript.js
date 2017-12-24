document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("but").addEventListener("click", handler);
  chrome.tabs.executeScript(null, { file: "jquery.js" });
  chrome.tabs.executeScript(null, { file: "jquery-ui.js" });
  chrome.tabs.insertCSS(null, { file: "jquery-ui.css"});
});

function handler() {
  var link =document.getElementById("link").value;
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = link.match(regExp);
  var result =  (match&&match[7].length==11)? match[7] : false;

  chrome.tabs.query({ active: true, currentWindow: true}, (activeTabs) => {
    chrome.tabs.executeScript(activeTabs[0].id, { 
        code: 'var x = document.createElement("div");\
        x.id="dialog"; \
        x.innerHTML = "<iframe id=%22frame%22 width=96% height=96% src=https://www.youtube.com/embed/'+result+' allowfullscreen></iframe>";\
        document.body.appendChild(x);\
        $("#dialog").dialog({  beforeClose: function( event, ui ) { $("#dialog").empty();  $("#dialog").remove();}});' 
      });
  });

}    
  