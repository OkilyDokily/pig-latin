
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var vowels = ["a","e","i","o","u"];
function pigLatin(input){
 if (!alphabet.includes(input[0])){
   return input;
 }
 if(vowels.includes(input[0])){
   return input + "way";
 }
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var input = $("#piglatin").val();
    var result = pigLatin(input);
    $("#result").text(result);
  });
});