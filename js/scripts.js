
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var vowels = ["a","e","i","o","u"];
function pigLatin(input){
  if(input.split(" ").length === 1 && !vowels.includes(input[0]) && alphabet.includes(input[0])){
    var consonants = [];
    consonants.push(input[0]);
    for(var i = 1; i < input.length;i++){
      if(!vowels.includes(input[i])){
        consonants.push(input[i]);
      }
      else{
        break;
      }
    }

    if(consonants.join("") === "q" && input[1]==='u'){
      consonants.push(['u']);
    }
    
    if(consonants.join("") === "sq" && input[2]==='u'){
      consonants.push(['u']);
    }
    
    var rest =  input.slice(consonants.length);
    return rest + consonants.join("") + "ay";  
  }

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