function solve() {

  let input = document.getElementsByTagName('textarea')[0];
  let generateBtn = document.getElementsByTagName('button')[0];
  generateBtn.addEventListener('click', generate);

  function generate() {
    let furniture = JSON.parse(input.value);
    let table = document.getElementsByTagName('tbody')[0];
    for (const item of furniture) {
      let row = document.createElement('tr');
      let img = document.createElement('td');
      let name = document.createElement('td');
      let price = document.createElement('td');
      let decFactor = document.createElement('td');
      let mark = document.createElement('td');
      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      img.innerHTML = `<img src="${item.img}">`;
      name.textContent = item.name;
      price.textContent = item.price;
      decFactor.textContent = item.decFactor;
      mark.appendChild(input);
      row.appendChild(img);
      row.appendChild(name);
      row.appendChild(price);
      row.appendChild(decFactor);
      row.appendChild(mark);
      table.appendChild(row);
    }

    let names = [];
    document.getElementsByTagName('button')[1].addEventListener('click', buy);

    function buy(){
      let checked = Array.from(document.getElementsByTagName('input')).filter(x => x.checked);
      for (const item of checked) {
        let parent = item.parentNode.parentNode;
        let name = parent.children[1].textContent;
        names.push(name);
      }
      let totalPrice = 0;
      let decFactor = 0;
      for (const item of furniture) {
        if(names.includes(item.name)){
          totalPrice += Number(item.price);
          decFactor += Number(item.decFactor);
        }
      }
      let result = `Bought furniture: ${names.join(', ')}\n`;
      result += `Total price: ${totalPrice.toFixed(2)}\n`;
      result += `Average decoration factor: ${decFactor / names.length}`;
      document.getElementsByTagName('textarea')[1].value = result;
    }

  }
  

 
}