function CalculateSpices(yield){

    let days = 0;
    let spices = 0;

    while(yield >= 100){
        spices += yield - 26;
        yield -= 10;
        days++;
    }
    if(spices >= 26){
        spices -= 26;
    }
    console.log(days);
    console.log(spices);
}

CalculateSpices(450);