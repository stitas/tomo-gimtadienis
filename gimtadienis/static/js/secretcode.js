'use strict'

let secretword = 'naparnikas'
let input = document.getElementById('geussfield')

document.getElementById('submitfield').onclick = geussCode
input.addEventListener('keyup',enterPress)

function enterPress(){
    if (event.keyCode === 13){
      document.getElementById("submitfield").click()
    }
  }

function geussCode(){
    let user_input = document.getElementById('geussfield').value

    if (user_input === secretword){
        document.getElementById('btn-to-end-container').style.display = 'block'
        document.getElementById('geussfield').disabled = true
    }else{
        document.getElementById('geussfield').value = ''
        document.getElementById('geussfield').classList.add('error')
        setTimeout(function() {
            document.getElementById('geussfield').classList.add('error').classList.remove('error');
        }, 300);
    }
}