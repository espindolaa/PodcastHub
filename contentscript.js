document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("but").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
  var link =document.getElementById("link").value;
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = link.match(regExp);
  var result =  (match&&match[7].length==11)? match[7] : false;
  window.alert(result);
  var iframe = document.getElementById("frame") 
  iframe.src = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + result + '" frameborder="0"></iframe>'; 
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/mvT7wws6eAU" frameborder="0"></iframe>