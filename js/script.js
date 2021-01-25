var kilometri = parseInt(prompt('Inserisci il numero di kilometri che dovrai percorrere!'));

var priceTicket = kilometri * 0.21;

if (isNaN(kilometri)) {

  alert('Riprova inserendo un numero');

} else {

  var age = parseInt(prompt('Bene, ora inserisci la tua età!'));

  if (isNaN(age)) {

    alert('Riprova inserendo un numero');

  } else {

    if (age < 18) {
      priceTicket *= 0.8;
    }

    if (age > 65) {
      priceTicket *= 0.6;
    }

    document.getElementById('ticket-price').innerHTML = 'Il prezzo del tuo biglietto è di ' + priceTicket.toFixed(2) + ' euro';
  }
}

/* Prima Consegna:
var distance = prompt('Hey, quanti kilometri devi fare?');

if (isNaN(distance)) {

  alert('Puoi inserire solo numeri. Riprova!');

} else {

  var age = prompt('Ok, ora... Quanti anni hai?');

  if (isNaN(age)) {

    alert('Puoi inserire solo numeri. Riprova!');

  } else {

    var price = parseInt(distance) * 0.21;

    if (age < 18) {
      discount = price * 0.2;
    } else if (age > 65) {
      discount = price * 0.4;
    } else {
      discount = 0;
    }

    var finalPrice = price - discount;

    var finalPriceFixed = finalPrice.toFixed(2);

    document.getElementById('ticketPrice').innerText = ('Bene! Il prezzo del tuo biglietto è di ' + finalPriceFixed + ' euro');
  }
} */
