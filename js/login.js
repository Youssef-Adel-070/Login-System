var emailLogin=document.getElementById("emailLogin");
var PasswordLogin=document.getElementById("PasswordLogin") ;
var btn_login =document.getElementById("btn_login");
var messageLogin =document.getElementById("messageLogin")
var allInputs=JSON.parse(localStorage.getItem("client"))||[];     
var nameIndex;
var check=true ;  
var text;

btn_login.addEventListener("click",add ) 

function add() {
    for(var i=0;i<allInputs.length;i++){ 
        if (emailLogin.value==allInputs[i].email &&
            PasswordLogin.value==allInputs[i].password) {  
                nameIndex=i 
                sessionStorage.setItem("index",nameIndex)
                 window.location.href='Home.html'; 
                return;
           
        } else{ 
             check=false;
        }
        
    }  
    if(check){  
        messageLogin.classList.add('d-none')

    }else{ 
        messageLogin.classList.remove('d-none')
    }   
}


