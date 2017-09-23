$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = number(number);
    $("#result").text(result);
  });
});
