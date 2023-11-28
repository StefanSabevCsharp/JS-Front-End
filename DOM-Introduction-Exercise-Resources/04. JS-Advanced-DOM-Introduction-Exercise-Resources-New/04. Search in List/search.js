function search() {
 
   let towns = document.querySelectorAll('ul#towns li');
   let input = document.querySelector('input#searchText').value;
   let result = document.querySelector('#result');
   let count = 0;
 
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(input)) {
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';
         count++;
      } else {
         towns[i].style.fontWeight = '';
         towns[i].style.textDecoration = '';
      }
   }
   result.textContent = `${count} matches found`;
   
}
