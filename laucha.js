var usd;
var eth;
$.getJSON('https://mindicador.cl/api', function(data) {
    console.log(data.dolar.valor)
    usd=data.dolar.valor;
}).fail(function() {
    console.log('Error al consumir la API!');
});
$.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=100', function(data) {
    console.log(data[1].price_usd)
    eth=data[1].price_usd;
}).fail(function() {
    console.log('Error al consumir la API!');
});