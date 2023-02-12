
document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawField = document.getElementById("withdraw-value");
    const withdrawFieldValue = withdrawField.value ;
    
    const withdrawFieldInt = parseFloat(withdrawFieldValue);
    console.log(typeof withdrawFieldInt);

    const withdrawInnerField = document.getElementById("withdraw-money");
    const withdrawInnerFieldValue = withdrawInnerField.innerText ;
    const wInt = parseFloat(withdrawInnerFieldValue);

    const totalW = withdrawFieldInt + wInt;
    
    const totalBalanceIs = parseFloat (document.getElementById("total-balance").innerText);
    if(totalW > totalBalanceIs ){
        withdrawField.value = 0 ;
        return alert("You can't more money");


    }
    withdrawInnerField.innerText = totalW ;
    
    let finalTotalIs = totalBalanceIs - totalW ;
    document.getElementById("total-balance").innerText = finalTotalIs;
    

    withdrawField.value = "";



})