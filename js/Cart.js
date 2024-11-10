// let productsContainer = document.querySelector('#all-products');

// let getProducts = async function () {
//   let temp = "";

//   try {
//     const response = await fetch('https://fakestoreapi.com/Cart');
//     const json = await response.json();

//     // افترض أن json هو مصفوفة من كائنات السلة
//     for (let cart of json) {
//       temp += 
//       `
//         <div class="card" style="width: 18rem;">
//           <p class="card-text">Cart ID: ${cart.id}</p>
//           <p class="card-text">User ID: ${cart.userId}</p>
//           <p class="card-text">Date: ${cart.date}</p>
//           ${cart.products.map(product => `
//             <div>
//               <p class="card-text">Product ID: ${product.productId}</p>
//               <p class="card-text">Quantity: ${product.quantity}</p>
//             </div>
//           `).join('')}
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       `;
//     }

//     productsContainer.innerHTML = temp;

//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// getProducts();















//  https://fakestoreapi.com/products >> Api Products 


let productsContainer = document.querySelector('#all-products');


let getProcuts = async function () {
    let temp = "";;
    let response = await fetch(`https://fakestoreapi.com/carts `);
    let products = await response.json();

    for (product of products) {
        temp += `
 <div class="card" style="width: 18rem;">
          <p class="card-text">Cart ID: ${product.id}</p>
          <p class="card-text">User ID: ${product.userId}</p>
          <p class="card-text">Date: ${product.date}</p>
            <div>
              <p class="card-text">Product ID: ${product.productId}</p>
              <p class="card-text">Quantity: ${product.quantity}</p>
            </div>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

`


productsContainer.innerHTML = temp;

    }
}

getProcuts();



document.addEventListener('DOMContentLoaded', function () {
  // الحصول على زر toggler
  const toggler = document.querySelector('.navbar-toggler');
  
  // إضافة حدث عند الضغط على زر toggler
  toggler.addEventListener('click', function () {
      const offcanvas = document.getElementById('offcanvasDarkNavbar');
      
      // التبديل بين الفتح والإغلاق
      if (offcanvas.classList.contains('show')) {
          offcanvas.classList.remove('show');
          offcanvas.style.visibility = 'hidden';
          offcanvas.style.opacity = '0';
      } else {
          offcanvas.classList.add('show');
          offcanvas.style.visibility = 'visible';
          offcanvas.style.opacity = '1';
      }
  });
  
  // إغلاق offcanvas عند الضغط على زر الإغلاق
  const closeBtn = document.querySelector('.btn-close');
  closeBtn.addEventListener('click', function () {
      const offcanvas = document.getElementById('offcanvasDarkNavbar');
      offcanvas.classList.remove('show');
      offcanvas.style.visibility = 'hidden';
      offcanvas.style.opacity = '0';
  });
});