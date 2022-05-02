var scheduleObj = JSON.parse(localStorage.getItem("schedule"))
console.log(schedule)

var tr = document.createElement("tr")
var td1 = document.createElement("td")
td1.innerText = schedule.matchnumber
var td2 = document.createElement("td")
td2.innerText=schedule.teamA
var td3 = document.createElement("td")
td3.innerText=schedule.teamB
var td4 = document.createElement("td")
td4.innerText=schedule.date
var td5 = document.createElement("td")
td5.innerText=schedule.venue


tr.append(td1,td2,td3,td4,td5)
document.querySelector("tbody").append(tr);
// tr.append(td1,td2,td3,td4,td5)