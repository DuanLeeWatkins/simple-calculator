let total = 0;

document.querySelector("#pumpkin").addEventListener("click", makeZero);
document.querySelector("#dominosPizza").addEventListener("click", jumanji);
document.querySelector("#zebra").addEventListener("click", add9);
document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);
document.querySelector("#aStack").addEventListener("click", addStack);

function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerText = total;
}

function jumanji() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerText = total;
}

function add9() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function sub2() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function addStack() {
  total = total + 1000;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
