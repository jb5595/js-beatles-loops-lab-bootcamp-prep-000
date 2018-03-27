function theBeatlesPlay(musicians, instruments){
  var newString = new Array();
  for (let i = 0; i <musicians.length; i++){
   newString[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newString;
}

function johnLennonFacts(facts){
 var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}