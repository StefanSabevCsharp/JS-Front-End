function sumTable() {
 let rows = document.querySelectorAll("td");

 let sum = 0;
 for (let index = 1; index < rows; index+= 2) {
    
    let currentNumber = Number(rows[index]);
    sum += currentNumber;
 }
 console.log(sum)
 console.log("hello")
}