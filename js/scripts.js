$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#over18').show();
  } else {
    $('#under18').show();
  }
});
