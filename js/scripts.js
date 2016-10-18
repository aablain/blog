$(document).ready(function() {
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background")
  });
  $("button#normal").click(function() {
    $("body").removeClass();
  });
});
