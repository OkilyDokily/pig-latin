

function pigLatin(input){
  if(input == 3)
  {
      return 3;
  }
  else {
    return "atway"
  }
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var input = $("#piglatin").val();
    var result = pigLatin(input);
    $("#result").text(result);
  })

})