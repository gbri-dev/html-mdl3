let form = document.getElementById('formCalc')

let messageResult = document.getElementsByClassName('message-result')

let number1 = document.getElementById('numA')
let number2 = document.getElementById('numB')

form.addEventListener('submit', function(e){
  e.preventDefault()

  let result = calc(number1.value, number2.value)  

  if(result === number2.value){
    messageResult[0].innerHTML = `<p>Válido pois <strong>${number2.value}</strong> é maior que ${number1.value}.</p>`
    messageResult[0].style.color = 'green'
    messageResult[0].style.border = '2px solid green'
  } else if(result === null){
    messageResult[0].innerHTML = `<p>Inválido pois <strong>${number2.value}</strong> é igual à ${number1.value}.</p>`
    messageResult[0].style.color = 'red'  
    messageResult[0].style.border = '2px solid red'
  }    
   else {
    messageResult[0].innerHTML = `<p>Inválido pois <strong>${number2.value}</strong> é menor que ${number1.value}.</p>`
    messageResult[0].style.color = 'red'  
    messageResult[0].style.border = '2px solid red'
  }

})

function calc(numA, numB){
  if(numA < numB){
    return numB
  } else if(numA === numB){
    return null
  }
  else{
    return numA
  }
}
