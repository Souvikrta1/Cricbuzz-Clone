const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector("#submitBtn1");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const wrongEmail=document.querySelector(".input-mail")
// checkbox.addEventListener("click",()=>{
//     submitBtn.style.backgroundColor="rgba(58, 185, 173, 1)";

// })
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {

        // alert("Valid email address!");
        localStorage.setItem("emailid",input);
        localStorage.setItem("data","yes");
        window.location.href="logout.html";
        return true;

    } else {
        wrongEmail.style.borderBottom="2px solid red";
        alert("Invalid email address!");

        return false;

    }

}
submitBtn.addEventListener("click", () => {
    if (email.value == "") {
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 3000);
    }
    else
    {
        ValidateEmail(email.value);

    }
});
checkbox.addEventListener('click', (e) =>{
    if(submitBtn.disabled) {
        submitBtn.removeAttribute("disabled");
        submitBtn.style.backgroundColor="rgba(58, 185, 173, 1)";
    } else {
        submitBtn.disabled="true";
        submitBtn.style.backgroundColor="rgba(58, 185, 173, .6)";
    }
})
if(checkbox.checked){
    submitBtn.removeAttribute("disabled");
    submitBtn.style.backgroundColor="rgba(58, 185, 173, 1)";
} else {
    submitBtn.disabled="true";
    submitBtn.style.backgroundColor="rgba(58, 185, 173, .6)";
}

//login related
if(localStorage.getItem("data") == "yes"){
    window.location.href = "index.html";
}







