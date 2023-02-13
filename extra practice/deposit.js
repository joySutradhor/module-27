
document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositField = document.getElementById("deposit-field");
    const depositValueStr = depositField.value ;
    const depositValueInt = parseFloat(depositValueStr);
    depositField.value = '' ;
    if(isNaN(depositValueInt)){
        return alert("Please Type your Amount");
    }
    
    const depositMoney = document.getElementById("deposit-money");
    const depositMoneystr = depositMoney.innerText;
    const depositMoneyInt = parseFloat(depositMoneystr);
    
    const depositCurrentMoney = depositMoneyInt + depositValueInt ;
    depositMoney.innerText = depositCurrentMoney ;

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceStr = totalBalance.innerText ;
    const totalBalanceInt = parseFloat(totalBalanceStr);
    
    const deposittotalBalance = depositValueInt + totalBalanceInt ;
    totalBalance.innerText = deposittotalBalance ;
    
})