
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var vowels = ["a","e","i","o","u"];
function pigLatin(input){
 
  var array = input.split(" ").map(item => {
  if (!alphabet.includes(item[0])){
    return item;
  }
  if(vowels.includes(item[0])){
    return item + "way";
  }
  if(!vowels.includes(item[0])){
    var firstLetter = item[0];
    var rest = item.slice(1);
    return rest + firstLetter + "ay"  
  }
 });
 
 return array.join(" ");
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var input = $("#piglatin").val();
    var result = pigLatin(input);
    $("#result").text(result);
  });
});