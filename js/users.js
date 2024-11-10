
//  https://fakestoreapi.com/products >> Api Products 


let productsContainer = document.querySelector('#all-products');


let getProcuts = async function () {
  let temp = "";;
  let response = await fetch(`https://fakestoreapi.com/users`);
  let products = await response.json();

  for (product of products) {
    temp += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5><span class="badge text-bg-success">${product.email}</span>

    <p class="card-text">${product.username}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
}
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