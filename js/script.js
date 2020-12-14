var distance = prompt('Hey, quanti kilometri devi fare?');

if (isNaN(distance)) {
  alert('Puoi inserire solo numeri. Riprova!')
}else{
  var age = prompt('Ok, ora... Quanti anni hai?')

  if (isNaN(age)){
    alert('Puoi inserire solo numeri. Riprova!')
  }else{
    if (age < 18){
      alert('Bene! Il prezzo del tuo biglietto è ' + distance * 0.21 * 0.8)
    }else if (age > 65) {
      alert('Bene! Il prezzo del tuo biglietto è ' + distance * 0.21 * 0.6)
    }else {
      alert('Bene! Il prezzo del tuo biglietto è ' + distance * 0.21)
    }
  }
}
