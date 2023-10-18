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





var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}