const form=document.querySelector('#form')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const confirmpassword=document.querySelector('#confirmpassword');
const email=document.querySelector("#email")




form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    };
})

function validateInputs(){
    const usernameVAl=username.value.trim()
    const passwordVAl=password.value.trim()
    const confirmpassVAl=confirmpassword.value.trim()
    const emailval=email.value.trim()

    let success = true

    if (usernameVAl===''){
        success=false
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    

    if (passwordVAl===''){
        success=false
        seterror(password,'password is required')
    }
    else if (passwordVAl.length<8){
        success=false
        seterror(password,'password must be atleast 8 characters')
    }
    else{
        setsuccess(password)
    }

    if (confirmpassVAl===''){
        success=false
        seterror(confirmpassword,'conform password is required')
    }
    else if (confirmpassVAl !== passwordVAl){
        success=false
        seterror(confirmpassword,'conform password not match')
    }
    else{
        setsuccess(confirmpassword)
    }
    if (emailval===''){
        success=false
        seterror(email,'Email is required')
    }
    else if (!ValidateEmail(emailval)){
        seterror(email,'please enter valid email')

    }
    
    else{
        setsuccess(email)
    }
    
    



    return success;
}

function seterror(element,message){
    const input=element.parentElement;
    const error=input.querySelector('.error')

    error.innerText = message
    input.classList.add('error')
    input.classList.remove('success')
}


function setsuccess (element,message){
    const input=element.parentElement;
    const error=input.querySelector('.error')

    error.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
}


function validateEmail(email) {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return res.test(String(email).toLowerCase());
}












