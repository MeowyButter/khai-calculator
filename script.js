let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function operate(operator) {
  appendToResult(operator);
}

function calculate() {
  try {
    let expression = result.value;
    let computedValue = eval(expression);

    if (Number.isFinite(computedValue)) {
      result.value = computedValue;
    } else if (expression === "0/0") {
      result.value = "Undefined";
	 } else if (expression === "00/0") {
      result.value = "Undefined";
    } else if (computedValue === Infinity) {
      result.value = "0";
    } else if (computedValue === -Infinity) {
      result.value = "0";
    } else {
      result.value = "Error";
    }
  } catch (error) {
    result.value = "Error";
  }
}

function backspace() {
  result.value = result.value.slice(0, -1);
}
