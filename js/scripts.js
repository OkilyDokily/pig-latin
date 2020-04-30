
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
      
      var consonants = [];
      consonants.push(item[0]);
      for(var i = 1; i < item.length;i++){
        if(!vowels.includes(item[i])){
          consonants.push(item[i]);
        }
        else{
          break;
        }
      }
  
      if(consonants.join("") === "q" && item[1]==='u'){
        consonants.push(['u']);
      }
      
      if(consonants.join("") === "sq" && item[2]==='u'){
        consonants.push(['u']);
      }
      
      var rest =  item.slice(consonants.length);
      return rest + consonants.join("") + "ay";  
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