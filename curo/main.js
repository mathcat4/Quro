function run() {
  let input = document.getElementById("input");
  let code = document.getElementById("code");
  let output = document.getElementById("output");

  out = tokenize(code.value);

  output.value = out;
}
