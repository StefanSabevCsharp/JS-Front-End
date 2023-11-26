function sumTable() {
  
   let rows = document.querySelectorAll("table tr");
   let totalSum = 0;

   for (let index = 1; index < rows.length; index++) {
      
      let cells = rows[index].children;
      let cellPrice = Number(cells[1].textContent);
      totalSum += cellPrice;
   }
   document.getElementById("sum").textContent = totalSum;
}