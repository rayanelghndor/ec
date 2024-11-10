// let productsContainer = document.getElementById("products-detels");
// let productId = localStorage.getItem('clickproduct')


// let getProdcutsDatels = async function (productId){
//     let res = await fetch(`https://fakestoreapi.com/products/${productId}`);
//     let ProdcutsDatels = await res.json();
//     console.log(ProdcutsDatels);

//     let temp = `
// <div class="card" style="width: 18rem;">
//   <img src="${ProdcutsDatels.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${ProdcutsDatels.title}</h5>
//      <p class="card-text">${ProdcutsDatels.category}</p>
//     <h5 class="card-title"><span class="badge text-bg-success">${ProdcutsDatels.price}</span></h5>
//     <p class="card-text">${ProdcutsDatels.description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// `;
//     productsContainer.innerHTML = temp;
// }


// getProdcutsDatels(productId);