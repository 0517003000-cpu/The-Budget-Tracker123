function calculate(){

// get income
let income = Number(document.getElementById("income").innerText) || 0

// calculate budgets
let needsBudget = income * 0.5
let wantsBudget = income * 0.3
let savingsBudget = income * 0.2

// display available funds
document.getElementById("needsBudget").innerText =
"$ " + needsBudget.toLocaleString()

document.getElementById("wantsBudget").innerText =
"$ " + wantsBudget.toLocaleString()

document.getElementById("savingsBudget").innerText =
"$ " + savingsBudget.toLocaleString()


// calculate NEEDS spending
let needsTotal = 0

document.querySelectorAll(".needs").forEach(cell => {
needsTotal += Number(cell.innerText) || 0
})

// calculate WANTS spending
let wantsTotal = 0

document.querySelectorAll(".wants").forEach(cell => {
wantsTotal += Number(cell.innerText) || 0
})

// calculate SAVINGS spending
let savingsTotal = 0

document.querySelectorAll(".savings").forEach(cell => {
savingsTotal += Number(cell.innerText) || 0
})


// display totals
document.getElementById("needsTotal").innerText =
"$ " + needsTotal.toLocaleString()

document.getElementById("wantsTotal").innerText =
"$ " + wantsTotal.toLocaleString()

document.getElementById("savingsTotal").innerText =
"$ " + savingsTotal.toLocaleString()


// check budget status
updateStatus("needs", needsTotal, needsBudget)
updateStatus("wants", wantsTotal, wantsBudget)
updateStatus("savings", savingsTotal, savingsBudget)

}



function updateStatus(type,total,budget){

let status = document.getElementById(type + "Status")

if(total > budget){

status.innerText = "Over Budget"
status.style.color = "red"

}else{

status.innerText = "Under Budget"
status.style.color = "green"

}

}
