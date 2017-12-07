$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var word;
    var word = $("input#sentence").val();

    var splitted = word.split(",");

$(".divs").text(splitted);

     $("#sory").show();
    event.preventDefault();

  });
});
