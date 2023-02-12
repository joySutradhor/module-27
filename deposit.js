
document.getElementById('deposit-btn').addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const newDepositTaka = depositField.value;
    const depositMoney = document.getElementById("deposit-money");
    const previousMoney = depositMoney.innerText;
    const totalDepositTaka = parseFloat(newDepositTaka) + parseFloat(previousMoney) ;
    depositMoney.innerText = totalDepositTaka ;

    const totalBalance = document.getElementById("total-balance");
    const previous = totalBalance.innerText ;
    const final = parseFloat(previous);
    const finalBalance = parseFloat(newDepositTaka) + final ;
    totalBalance.innerText = finalBalance ;
    depositField.value = "";


})