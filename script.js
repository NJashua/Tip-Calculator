let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculateTip() {
  let billAmountElementValue = billAmountElement.value;
  let percentageTipElementValue = percentageTipElement.value;

  if (billAmountElementValue === "") {
    errorMessageElement.textContent = "Please Enter a Valid Input";
  } else if (percentageTipElementValue === "") {
    errorMessageElement.textContent = "Please Enter a Valid Input";
  } else {
    errorMessageElement.textContent = "";

    let calculatedTipValue =
      (parseInt(percentageTipElementValue) / 100) *
      parseInt(billAmountElementValue);
    document.getElementById("tipAmount").value = calculatedTipValue;
    let totalAmount = parseInt(billAmountElementValue) + calculatedTipValue;
    document.getElementById("totalAmount").value = totalAmount;
  }
}
