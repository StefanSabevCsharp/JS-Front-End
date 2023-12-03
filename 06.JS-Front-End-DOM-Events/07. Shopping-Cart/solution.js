function solve() {
   
   let buttons = Array.from(document.querySelectorAll('.add-product'));
   let textArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click',checkout);

   buttons.forEach(b =>{
      b.addEventListener('click',addToBasket);
   });

   let names = [];
   let totalPrice = 0;

   function addToBasket(e){
      
      let currentProduct = e.currentTarget.parentNode.parentNode;
      let name = currentProduct.querySelector('.product-title').textContent;
      let price = Number(currentProduct.querySelector('.product-line-price').textContent);
      names.push(name);
      textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      totalPrice += price;

   }
   function checkout(){

      textArea.textContent += `You bought ${names.join(', ')} for ${totalPrice.toFixed(2)}.`;
      buttons.forEach(b =>{
         b.disabled = true;
      });
      checkoutButton.disabled = true;
   }


}