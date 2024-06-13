const masterCard = document.getElementById("masterCard");
const visa = document.getElementById("visa");
const payPal = document.getElementById("payPal");
const gcash = document.getElementById("gcash");
const submitBtn = document.getElementById("submitBtn");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function() {
    if(masterCard.checked){
        paymentResult.textContent = `You are paying with Visa`;
    } else if(visa.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    } else if(payPal.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    } else if(gcash.checked){
        paymentResult.textContent = `You are paying with GCash`;
    } else {
        paymentResult.textContent = `You must select a payment option`;
    }
}