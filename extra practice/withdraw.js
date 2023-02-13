

document.getElementById("withdraw-btn").addEventListener("click", function(){

    const withdrawField = document.getElementById("withdraw-value");
    const withdrawFieldStr = withdrawField.value;
    const withdrawFieldInt = parseFloat(withdrawFieldStr);
    withdrawField.value = "";
    if(isNaN(withdrawFieldInt)){
        return alert("Type Your withdraw Amount");
    }
    
    const withdrawMoneyText = document.getElementById("withdraw-money");
    const withdrawMoneyStr = withdrawMoneyText.innerText;
    const withdrawMoneyInt = parseFloat(withdrawMoneyStr);
 
    const currentWithdrawMoney = withdrawFieldInt + withdrawMoneyInt ;
    
    const totalBalanceMoney = document.getElementById("total-balance");
    const totalBalanceStr = totalBalanceMoney.innerText ;
    const totalBalanceInts = parseFloat(totalBalanceStr);
    
    if(currentWithdrawMoney > totalBalanceInts){
        return alert("Your Balance is low");
    }
    withdrawMoneyText.innerText = currentWithdrawMoney ;

    const finalTotalBalance = totalBalanceInts - withdrawFieldInt ;
    totalBalanceMoney.innerText = finalTotalBalance ;

})