
//  https://fakestoreapi.com/products >> Api Products 


let productsContainer = document.querySelector('#all-products');


let getProcuts = async function () {
    let temp = "";;
    let response = await fetch(`https://fakestoreapi.com/products `);
    let products = await response.json();

    for (product of products) {
        temp += `
        
<div class="card" style="width: 18rem;">
<img src="${product.image}" class="card-img-top" alt="...">
  <a (${product.id})>  <p class="card-text"></p></a>
<h5 class="card-title">${product.title}</h5>
<p class="card-text"><span class="badge text-bg-success">${product.price}</span></p>
<p class="card-text">${product.description}</p>
<p class="card-text">${product.category}</p>


  

<p class="card-text">${product.rating.rate}</p>
<p class="card-text">${product.rating.count}</p>

<d
<a onclick="addtocart(${product.id})" href="#" class="btn btn-primary">add to cart
</a>
</div>
`


productsContainer.innerHTML = temp;

    }
}

getProcuts();


// let arr = []; 
// function addtocart(id){
//   arr.push(id)
//   localStorage.setItem("usercart" ,JSON.stringify(arr));
//   // location.href = "datels.html";
//   let items =  JSON.stringify(localStorage.getItem('usercart'));
// }







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




