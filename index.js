// add solution here
function theBeatlesPlay(musicians, instruments) {
  let whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whoPlaysWhat;
}