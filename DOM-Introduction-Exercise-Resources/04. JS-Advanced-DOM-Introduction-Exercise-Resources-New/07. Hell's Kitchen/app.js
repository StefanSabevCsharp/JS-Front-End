function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector("textarea").value;
      let restoraunts = JSON.parse(input);
      let result = [];

      for (let index = 0; index < restoraunts.length; index++) {

         let workers = restoraunts[index].split(" - ")[1].split(", ");
         let salary = 0;
         let bestSalary = 0;
         for (let index = 0; index < workers.length; index++) {
            let worker = workers[index].split(" ");
            if (Number(worker[1]) > bestSalary) {
               bestSalary = Number(worker[1]);
            }
            salary += Number(worker[1]);
         }
         let resto = {
            name: restoraunts[index].split(" - ")[0],
            workers: workers,
            bestSalary: bestSalary,
            averageSalary: salary / workers.length
            
         }
         result.push(resto);
         
      }

      let bestResto = result.sort((a, b) => b.averageSalary - a.averageSalary)[0];
      let bestSalary = bestResto.bestSalary.toFixed(2);
      let averageSalary = bestResto.averageSalary.toFixed(2);
      let workers = bestResto.workers.sort((a, b) => b[1] - a[1]);
      let bestWorkers = [];
      for (let index = 0; index < workers.length; index++) {
         bestWorkers.push(`Name: ${workers[index].split(" ")[0]} With Salary: ${workers[index].split(" ")[1]}`)
      } 
      document.querySelector("#bestRestaurant p").textContent = `Name: ${bestResto.name} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      document.querySelector("#workers p").textContent = bestWorkers.join(" ");
      

      
      
   }
}