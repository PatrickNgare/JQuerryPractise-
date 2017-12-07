
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    console.log("wwert");
    var inputs = ["person1","person2","animal","exclamation","verb","noun"];
    var orderedLists =[];

    inputs.forEach(function(input){
      var userInput = $("input#"+input).val().toUpperCase();
      console.log(userInput);
      orderedLists.push(userInput);
    });
    orderedLists.sort();
    orderedLists.forEach(function(list){
      $(".list").append("<li>"+list+"</li>");
    });

//
//     var person1Input = $("input#person1").val();
//     var person2Input = $("input#person2").val();
//     var animalInput = $("input#animal").val();
//     var exclamationInput = $("input#exclamation").val();
//     var verbInput = $("input#verb").val();
//     var nounInput = $("input#noun").val();
//
//     $(".groc1").text(person1Input);
//     $(".groc2").text(person2Input);
//     $(".groc3").text(animalInput);
//     $(".groc4").text(exclamationInput);
//     $(".groc5").text(verbInput);
//     $(".groc6").text(nounInput);
//




  // grocs.toUpperCase();
  // grocs.sort();


  //  $("#story").show();
    $("#blanks form").hide();
    event.preventDefault();

  });
});
