function theBeatlesPlay(musicians, instruments){
  var newString = new Array();
  for (let i = 0; i <musicians.length; i++){
   newString[i] = '${i}'
   // sentances[i] = '${musicians[i]} plays $[instruments[i]]'
  }
  return newString;
}