// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



const fromDollarToYen = (dollar) => {
    let euro = dollar/ oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;

}

const fromEuroToDollar = (euro) => {
     let dollar = euro * oneEuroIs.USD;
     return dollar;

}

const fromYenToPound = (yen) => {
    
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP
    return pound;

}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

