// PRODUCTS VARIABLE
var productsState = [
    {
      id: 1,
      name: 'Nike Air Force 1 LV8',
      price: 1699,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaObxj4qJiG26b7jvjmfRja0YLwh_id0i3Xoh-6DaTls3v7sr8M-Nczulbj6lowcmfBHwx7ccgx2h2dD4oq8Rm9CVQhdlBQ4_IzT28e67aT9kFacuwaJni_-U&usqp=CAE',
    },
    {
      id: 2,
      name: 'Nike Air More Uptempo - Black White',
      price: 1599,
      image:
        'https://cdn.shopify.com/s/files/1/0565/2489/8394/products/IMG_20220704_203804_832.webp?v=1657020171&width=600',
    },
    {
      id: 1,
      name: 'Nike Women Wmns Dunk High Black,White 9.5',
      price: 1750   ,
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTS75HM8OB_rdOFDL5iDi7cm_63dv0NtbC1t_yS3pl3avUCcTprq0uNZ4NGglnusbqneaIS6p1IoCKxwowOO7kNmDNlb2MInnGMOt8X4Jqdz7Hq4tBv0wPA',
    },
    {
      id: 1,
      name: 'Nike Air Force 1 Pixel Women',
      price: 1400,
      image:
        'https://static.wixstatic.com/media/baf97b_3169fc8d2b0e450c9fced231d25f416d~mv2.jpg/v1/fill/w_570,h_570,al_c,lg_1,q_85/baf97b_3169fc8d2b0e450c9fced231d25f416d~mv2.webp',
    },
    {
      id: 1,
      name: 'Nike air force "lucky charms"',
      price: 1250,
      image:
        'https://images.yaga.co.za/l4f4rigg588/80b94b.jpeg?s=1200&c=inside&f=webp',
    },
    {
      id: 1,
      name: 'Nike jordan 1 mid Barely Orange ',
      price: 1499,
      image:
        'https://cdn.shopify.com/s/files/1/0572/5804/9720/products/ab143d3c-9f04-4406-92ae-fb88a4809c30_1024x1024.jpg?v=1649013791',
    },
    {
      id: 1,
      name: 'Nike Air force 1 low VT oremiuum',
      price: 1600,
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkPe72pKF2QAgT8i6M0Zi2i8YUidZxvjjlO1Rs9noxb4qRwwIXYRQUUOzl0SLX0o3W-5GS69YHXs4iXhhk10cszQr7KbgDxO8oc8fAsNWfl9e4WbQafwUM&usqp=CAE',
    },
    {
      id: 1,
      name: 'Nike Sneakers Dunk',
      price: 2804,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSC7k4e20A-fu-fZs2f64mRLNpv-2Huly0MhxU-e5xNfdGHry2RioqvMbS4QGH-0-w65BfdrolMb7K3vlmyE8CRg293H0AOdw&usqp=CAE',
    },
  ]
  var cartProducts = []
  
  var Total = 0
  
  // LINK JS TO HTML ELEMENT
  const products = document.getElementById('products')
  const picture = document.getElementById('picture')
  const mapaseka = document.getElementById('mapaseka')
  const countProduct = document.getElementById('countProduct')
  
  // DISPLAY PRODUCTS IN HOME PAGE
  function homeDisplayProducts() {
    products.innerHTML = ""
    // loop into productsState and display
    for (let i = 0; i < productsState.length; i++) {
      products.innerHTML += `
      
      
      <div class="product">
          <div class="product__img">
              <img
                src=${productsState[i].image}
                alt=""
              />
          </div>
              <div class="product__name">${productsState[i].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(productsState[i].rates)}
                </div>
                <div class="product__price">R <span>${productsState[i].price}</span></div> 
                  <button onclick="addproducttocart(${i})">+ ADD TO CART</button>
            </div>
      
      `
    }
  }
  
  // ADD PRODUCTS INTO ARRAY
  function addproducttocart(i) {
    document.getElementById('countProduct')
    cartProducts.push(productsState[i])
  
    calculateTotal();
    homeDisplayProducts();
    showCart();
  }
  // DISPLAY CART FROM CARTPRODUCT ARRAY AFTER CLICK ADD TO CART
  function showCart() {
  
    picture.innerHTML = ""
  
    for (let i = 0; i < cartProducts.length; i++) {
      picture.innerHTML += `
      
      <div class="product">
          <div class="product__img">
              <img
                src="${cartProducts[i].image}"
                alt=""
              />
          </div>
              <div class="product__name">${cartProducts[i].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(cartProducts[i].rates)}
                </div>
                <div class=+"product__price">R <span>${cartProducts[i].price}</span></div>
                <button onclick="remove(${i})">- Remove</button> 
                  
            </div>
      
      `
    }
    countProduct.innerHTML = cartProducts.length;
  
    mapaseka.innerHTML = `R${Total }`;
  }
  
  // TOTAL OF ALL SELECTED CART TO PAYMENT
    function calculateTotal() {
      Total = 0;
  

      for (let i = 0; i < cartProducts.length; i ++) {
     Total += Number(cartProducts[i].price)
        
      }
    }

    // REMOVE SPECIFIC INDEX FROM ARRAY AFTER CLICK REMOVE 
  function remove(i) {
    cartProducts.splice(i, 1);
  
    calculateTotal();
    showCart();
  }
  
  // SHOW SCREEN
  showCart();
  homeDisplayProducts();
  
  
  
  