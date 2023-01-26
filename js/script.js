var km, age, price;
var pricePerKm = .21;
var under18 = 1 - .2;
var over65 = 1 - .4;
var output = document.getElementById('output');

// asking 'km'
km = parseInt(prompt('Quanti km devi percorrere?'));

// stop if 'km' isn't a positive number
if (isNaN(km) || km <= 0) {
    output.innerHTML = '<h1>I km devono essere un numero positivo!</h1>'

} else {
    // asking 'age'
    age = parseInt(prompt('Quanti anni hai?'));

    // stop if 'age' isn't a possible number
    if (isNaN(age) || age <= 0 || age > 100) {
        output.innerHTML = '<h1>L\'età deve essere un numero possibile!</h1>';

    } else {
        // calculate + print 'price' if 'age' is in range
        if (age < 18) pricePerKm *= under18;
        if (age >= 65) pricePerKm *= over65;
        price = (km * pricePerKm).toFixed(2);

        document.querySelector('#output ul').innerHTML = '<li>La tua età è di '+ age +' anni</li><li>Devi percorrere '+ km +' kilometri</li><li>Quindi il prezzo del tuo biglietto è di '+ price +' &#8364;</li>';
    }
}