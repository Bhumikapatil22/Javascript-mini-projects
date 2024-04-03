let eyeicon=document.getElementById("eyeicon");
let pass=document.getElementById("pass");

function showPass(){
    if(pass.type==="password")
    {
        pass.type="text";
        eyeicon.src="eye-open.png";
    }
    else{
        pass.type="password";
        eyeicon.src="eye-close.png";
        
    }
}