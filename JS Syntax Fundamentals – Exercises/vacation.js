function calculateTicketPrices(count,type,day){
    let pricePerOneTicket = 0;
    let totalPrice = 0;
    switch (type){
        case 'Students':
            if(day == 'Friday'){
                pricePerOneTicket = 8.45;
            }else if(day == 'Saturday'){
                pricePerOneTicket = 9.80;
            }else if(day == 'Sunday'){
                pricePerOneTicket = 10.46;
            }
            break;
        case 'Business':
            if(day == 'Friday'){
                pricePerOneTicket = 10.90;
            }else if(day == 'Saturday'){
                pricePerOneTicket = 15.60;
            }else if(day == 'Sunday'){
                pricePerOneTicket = 16;
            }
            break;
        case 'Regular':
            if(day == 'Friday'){
                pricePerOneTicket = 15;
            }else if(day == 'Saturday'){
                pricePerOneTicket = 20;
            }else if(day == 'Sunday'){
                pricePerOneTicket = 22.50;
            }
            break;
    }
    totalPrice = pricePerOneTicket * count;
    if(type == 'Students' && count >= 30){
        totalPrice *= 0.85;
    }else if(type == 'Business' && count >= 100){
        totalPrice -= 10 * pricePerOneTicket;
    }else if(type == 'Regular' && count >= 10 && count <= 20){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateTicketPrices(40,
    "Regular",
    "Saturday"
    );