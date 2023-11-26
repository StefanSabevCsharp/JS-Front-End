function storeProvision(productsArray,storeArray){

        let store = {};
       
        for (let index = 0; index < productsArray.length; index+= 2) {
            
            let productName = productsArray[index];
            let quantity = Number(productsArray[index + 1]);
            store[productName] = quantity;
        }

        for (let index = 0; index < storeArray.length; index+= 2) {
            let productName = storeArray[index];
            let quantity = Number(storeArray[index + 1]);
            if(store.hasOwnProperty(productName)){
                store[productName] += quantity;
            }else{
                store[productName] = quantity;
            }
        }

        for (const key in store) {
           console.log(`${key} -> ${store[key]}`)
        }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )