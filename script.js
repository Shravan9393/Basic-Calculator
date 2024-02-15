function Solve(val) {
  let v = document.getElementById("calc");
  v.value += val;
}
function Result() {
  let num1 = document.getElementById("calc").value;
  let num2 = eval(num1);
  document.getElementById("calc").value = num2;
}
function Clear() {
  let inp = document.getElementById("calc");
  inp.value = "";
}
function Back() {
  let ev = document.getElementById("calc");
  ev.value = ev.value.slice(0, -1);
}
