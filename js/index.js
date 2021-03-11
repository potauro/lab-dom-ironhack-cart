function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  console.log(price.innerHTML);
  const quantity = product.querySelector('.quantity input')
  console.log(quantity.value);
  const sum = quantity.value*price.innerHTML
  console.log(sum);
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = sum
  return sum

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  //const twoProducts = document.getElementsByClassName('product');
  //updateSubtotal(twoProducts);
  // ITERATION 2
  //... your code goes here


    let productArray = document.querySelectorAll(".product"); // [ <tr>, <tr> ]
  
    let start = 0;
    for (i = 0; i < productArray.length; i++) {
      start += updateSubtotal(productArray[i]);
    }


    document.querySelector("h2 span").innerHTML = start;
    return;



  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});




