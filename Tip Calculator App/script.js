const calculateTip = () => {
  const billAmt = parseFloat( document.getElementById('billAmount').value);
  const tipPer = parseFloat(document.getElementById('tipPercentage').value);
  

  if (isNaN(billAmt) || isNaN(tipPer)) {
    document.getElementById('result').textContent = 'Please Enter Valid Number';
    return;
  }
  
  //billamount calculation'
  const TipAmmount = (billAmt * tipPer) / 100;
  const toatalAmount = billAmt + TipAmmount;

  document.getElementById('result').innerHTML = `
    <p> Tip Amount: $${TipAmmount.toFixed(2)}</p>
    <p> Total Amount: $${toatalAmount.toFixed(2)}</p>
  `;

}