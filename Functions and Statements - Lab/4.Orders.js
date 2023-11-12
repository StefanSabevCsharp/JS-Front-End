function calculatePrice(product,quantity){

    let obj = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };
    console.log((obj[product] * quantity).toFixed(2))

}

calculatePrice('coke',100);
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
