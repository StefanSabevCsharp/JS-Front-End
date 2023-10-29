function solve(year){
    let date = new Date(year,2,1);
    date.setDate(date.getDate() - 1);
    let day = date.getDate();
    if(day == 29){
        console.log('yes');
    }else{
        console.log('no');
    }

}
solve(2000);