const n = document.getElementById("input");

function button(input) {
    if (n.value === "0" && input !== '.') {
        n.value = input;
    } else {
        n.value += input;
    }
}

function inputClear() {
    n.value = "0";
}

function inputDelete() {
    n.value = n.value.slice(0, -1) || "0";  // Remove the last character or reset to "0" if empty
}

function toggleSign() {
    if (n.value !== "0") {
        n.value = (parseFloat(n.value) * -1).toString();  // Toggle the sign of the current value
    }
}

function calculate() {
    try {
        // Make sure we replace the division symbol for eval to understand
        n.value = eval(n.value.replace('÷', '/').replace('x', '*'));
    } catch (error) {
        n.value = "Error";  // Show error if there's any issue with the input expression
    }
}
