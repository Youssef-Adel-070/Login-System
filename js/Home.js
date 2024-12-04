
var allInputs=JSON.parse(localStorage.getItem("client"))||[];   
var requriedIndex=sessionStorage.getItem("index");  
    
var verification=document.getElementById("verification"); 


verification.innerHTML=`welcome ${allInputs[requriedIndex].name}`

