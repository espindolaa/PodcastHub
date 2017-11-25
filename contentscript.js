document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("but").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
  var link =document.getElementById("link").value;
  window.alert(link);
  var iframe = document.getElementById("frame") 
  iframe.src = link; 
}