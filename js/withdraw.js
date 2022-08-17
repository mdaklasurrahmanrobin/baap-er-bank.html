document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdradField = document.getElementById('withdraw-field');

    const newWiThdrawAmountString = withdradField.value;
    const newWithdrawAmount = parseFloat(newWiThdrawAmountString);

    withdradField.value = '';


    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a valid number');
        return;
    }

    const withdrawTotalElemet = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElemet.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalancTotal = parseFloat(previousBalanceTotalString);

    withdradField.value = '';


    if(newWithdrawAmount > previousBalancTotal){
        alert('Bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElemet.innerText = currentWithdrawTotal;


    const newBalanceToatal = previousBalancTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceToatal;

    





   




})