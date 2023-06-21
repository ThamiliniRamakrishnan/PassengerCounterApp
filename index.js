let countElement = document.getElementById("count")
let saveCountElement = document.getElementById("previous-entries")
let count = 0;

function increment() {
  count += 1;
  countElement.textContent = count;
}

function save() {
  saveCountElement.textContent +=  " - " + count;
  count = 0;
  countElement.textContent = count;
}