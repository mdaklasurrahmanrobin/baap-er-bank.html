//  step 1 add event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click', function(){
    //  step - 2 get the deposite input field
    // for input field use (.value) to the value inside input field
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString)
    // console.log(depositAmount); 

    // step - 3 get the deposit amount 
    //  for non input type use (innerText) to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // console.log(depositTotal);
    const currentDepositeTotal = previousdepositTotal+newdepositAmount;
    
    depositTotalElement.innerText = currentDepositeTotal;

    //  step - 5 Balance update

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalancTotal = parseFloat(previousBalanceTotalString);

    //  claculate banalce

    const currentBalanceTotal = previousBalancTotal + newdepositAmount;

    // set the banalce total

    balanceTotalElement.innerText = currentBalanceTotal;












    depositField.value = '';
    

})