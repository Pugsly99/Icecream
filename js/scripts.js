$(document).ready(function() {
  const flavors = ["vanilla", "chocolate", "coffee", "Rocky Road", "peanutbutter cup"];
  flavors.forEach(function(icecream) {
    $("#bestFlavors").append(" I love " + icecream + "!")
    console.log("#bestFlavors");
  });
});