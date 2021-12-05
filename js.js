let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

console.log('hello');

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    icon.style.display="inline-block";
    if(emailId.value.match(mailRegex)){
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '1px solid hsl(0, 36%, 70%)';
    }
    else if(emailId.value == ""){
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '1px solid hsl(0, 36%, 70%)';
    }
    else{
        icon.style.display = 'block';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }

}


