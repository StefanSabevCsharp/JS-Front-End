function create(words) {
   let main = document.getElementById("content");

   for (const word of words) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = "none";
      div.appendChild(p);
      main.appendChild(div);
   }
   let allDivs = Array.from(main.getElementsByTagName('div'));

   allDivs.forEach(d =>{
      d.addEventListener('click',() => {
         d.firstChild.style.display = "";
      })
   })
  
}