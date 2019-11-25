let year = new Date().getFullYear()
document.getElementById("cal").innerHTML = calendar(year)
function setCalendar(year) {
}  
document.getElementById("preyear").innerHTML=calendar(year-1)
document.getElementById("nextyear").innerHTML=calendar(year+1)
