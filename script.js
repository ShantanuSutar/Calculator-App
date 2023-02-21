let inputBtns = document.querySelectorAll(".inputBtn"),
  input = document.getElementById("input"),
  equal = document.getElementById("equal"),
  clear = document.getElementById("clear"),
  erase = document.getElementById("delete");

let equalSign = 0;

window.onload = () => {
  input.value = "";
};
inputBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (equalSign == 1) {
      equalSign = 0;
      input.value = "";
    }
    input.value += btn.value;
  });
});

equal.addEventListener("click", () => {
  equalSign = 1;
  let inp_val = input.value;
  try {
    let ans = eval(inp_val);
    if (Number.isInteger(ans)) {
      input.value = ans;
    } else input.value = ans.toFixed(2);
  } catch (err) {
    alert("Invalid Input");
  }
});
