// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(){
  event.preventDefault();

  var matchobj = {
    matchnumber:masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    venue: masaiForm.venue.value,
  };

  localStorage.setItem("schedule",JSON.stringify(matchobj))

}
