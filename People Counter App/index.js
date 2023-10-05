// creating a variable count #l and giving it the value from the html sheet
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    countEl.innerText = count
    count += 1
}

function save(){
    saveEl.innerText += count + " - "
}