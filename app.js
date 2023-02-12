

document.getElementById("sumbit-btn").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const emailValue = emailField.value;
    const password = document.getElementById("pass").value;
    if(emailValue === "joysutradhorcmt@gmail.com" && password =="1234"){
        window.location = "home.html"
    }
    else{
       alert("Your Password or Email Invalid");
    }

})

