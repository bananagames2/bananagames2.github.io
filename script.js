function searchGames() {
  // Get the search input value
  var searchTerm = document.getElementById("search").value.toLowerCase();
  
  // Loop through all game icons
  var icons = document.getElementsByClassName("game-icons")[0].getElementsByTagName("a");
  for (var i = 0; i < icons.length; i++) {
    var icon = icons[i];
    
    // Get the name of the game associated with the icon
    var gameName = icon.getAttribute("name");
    
    // Check if the game name matches the search term
    if (gameName.toLowerCase().indexOf(searchTerm) > -1) {
      // Show the game icon
      icon.style.display = "inline-block";
    } else {
      // Hide the game icon
      icon.style.display = "none";
    }
  }
}
