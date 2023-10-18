const form=document.querySelector('#form')
const username=document.querySelector('#username')
const password=document.querySelector('#password')




form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    };
})

function validateInputs(){
    const usernameVAl=username.value.trim()
    const passwordVAl=password.value.trim()
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






function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Enter name!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("Input").value = "";
}

function remove(){
    let ul =document.getElementById('list')
    ul.removeChild(ul.child);
}