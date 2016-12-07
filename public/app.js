var app = function() {
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album'
  makeRequest(url, requestComplete);
  var items = [];
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if (this.status != 200) return;

  var jsonString = this.responseText;
  bigObject = JSON.parse(jsonString);
  items = bigObject.albums.items;
  populateList(items);
}

var populateList = function(albumItems) {
  var div = document.getElementById('albums');
  for (i = 0; i < albumItems.length; i++) {
    var a = document.createElement('a');
    var album = albumItems[i];
    a.innerText = "\nAlbum: " + album.name;
    a.href = album.external_urls.spotify;
    a.value = i;
    div.appendChild(a);
  }
}

window.onload = app;