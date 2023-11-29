function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let rows = Array.from(document.querySelectorAll("tbody tr"));
      let input = document.getElementById("searchField").value;

      for (let row = 0; row < rows.length; row++) {
         
         rows[row].className = "";
      }

      for (let row = 0; row < rows.length; row++) {
         
         if(rows[row].textContent.includes(input)){
            rows[row].className = "select";
         }
      }
      
   }
}