$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));


  if (age > 18) {
    $("#ofAge").show();
  } else if (age === 18) {
    $("#ofAge").show();
    // setTimeout(function() {
    //   alert("Congrats! You can finally vote!");
    // }, 0);
    alert("Congrats! You can finally vote!");

  } else {
    $("#minor").show();
  }
});
