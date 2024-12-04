var inputName=document.getElementById("inputName");
var inputEmail=document.getElementById("inputEmail");
var inputPassword=document.getElementById("inputPassword");  
var btn_signup=document.getElementById("sign-up") ;
var corrctValidate=document.getElementById("corrctValidate");
var incorrctValidate=document.getElementById("incorrctValidate"); 




var allInputs=JSON.parse(localStorage.getItem("client"))||[];  













btn_signup.addEventListener("click",function () {
 if (trueValidate()) {
    var input={
        name:inputName.value, 
        email:inputEmail.value, 
        password:inputPassword.value, 

    }
    allInputs.push(input);
    localStorage.setItem("client",JSON.stringify(allInputs)) 
    corrctValidate.classList.remove("d-none");
    incorrctValidate.classList.add("d-none"); 
    clear(); 
} else{ 
    incorrctValidate.classList.remove("d-none"); 
    corrctValidate.classList.add("d-none"); 
    
    clear();
 
}
})


function clear() {
    inputName.value=null;
    inputEmail.value= null;
    inputPassword.value=null;
} 

inputName.addEventListener("blur",function () {
    validate( /^[\w\s]{3,20}$/,inputName.value,inputName);

})
inputEmail.addEventListener("blur",function () {
    validate(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,inputEmail.value,inputEmail);
 
})
inputPassword.addEventListener("blur",function () {
    validate(/^[\w\s]{3,20}$/,inputPassword.value,inputPassword);
}) 

function validate(regex,inputTest,input) {
    if (regex.test(inputTest)) {
        input.classList.replace("is-invalid","is-valid"); 
        return true;
    }else{ 
        input.classList.add("is-invalid");
        return false;
    }
}   



function trueValidate() {
    if (
        validate(/^[\w\s]{3,20}$/,inputName.value,inputName)&&
        validate(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,inputEmail.value,inputEmail)&&
        validate(/^[\w\s]{3,20}$/,inputPassword.value,inputPassword)


    ) {
        return true; 
    }else{ 
        return false;
    }
}
