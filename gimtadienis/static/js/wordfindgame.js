'use strict'

let word_list = ['ambalas','egzaminai','elektrovara','gimtadienis','masina','pachmielas','pilnametyste','prada','prikabink','tomatas']
let counter = 0
let input = document.getElementById('geussfield')

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
      arr.splice(found, 1);
      found = arr.indexOf(what);
  }
}

document.getElementById('submitfield').onclick = geussWord
input.addEventListener('keyup',enterPress)

function enterPress(){
  if (event.keyCode === 13){
    document.getElementById("submitfield").click()
  }
}

function geussWord (){

  let word = document.getElementById('geussfield').value

  if (word_list.includes(word.toLowerCase())){
    counter++
    document.getElementById('geussfield').value = ''
    document.getElementById('word-counter').textContent = counter + '/10'
    remove(word_list,word)
  }else{
    document.getElementById('geussfield').value = ''
  }
  if (counter == 10){
    document.getElementById('btn-to-code').style.display = 'inline-block'
    document.getElementById('word-input').style.display = 'none'
  }
}

