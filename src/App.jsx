import './App.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'


function App() {
  const [amount, setAmount]=useState(0);
  const [cartItems, setCartItems]=useState([]);

  const product = {
    productId : '1',
    company : 'SNEAKER COMPANY',
    teaser : 'Fall Limited Edition Sneakers',
    description : 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price : 125.00,
    discount : '50%',
    oldPrice : 250.00,
    amount : amount,
    imageProduct : '/images/image-product-1.jpg'
  }
  const onChangeAmount=(e)=>{
    setAmount(e.target.value)
    
  }
  const addProduct = () =>{
    if (amount===0){
      alert('select amount first');
    }
    const newProduct = {
      productId : product.productId,
      imageProduct : product.imageProduct,
      teaser : product.teaser,
      price : product.price,
      amount : amount
    }
    
     const isFound= cartItems.find(item=>
      {
        if( item.productId===product.productId)
        {
          return true
        }
        return false
      }
      )
      if (isFound) {
          cartItems.find(item=>{
            if( item.productId===product.productId){
              item.amount=product.amount;
            }
          })
      }
      else setCartItems(oldArray=>[...oldArray, newProduct])
      

   
  }
  const deleteItem = (id) =>{
      cartItems.filter((item)=>{
        return item.productId !== id;
      })
      console.log('clicked delete')
  }

  function handleDecrement() {
    console.log('clicked')
    setAmount(function (prevAmount) {
      if (prevAmount > 0) {
        return (prevAmount -= 1); 
      } else {
        return (prevAmount = 0);
      }
    });
  }

  const openCart = () =>{
    console.log('clicked')
      const cart = document.querySelector('.cart-popup');
      const cartButton = document.querySelector('.icon-cart');
      const visible = cart.getAttribute("data-visible");
      if (visible === "false") {
        cart.setAttribute("data-visible", true);
        cartButton.setAttribute("aria-expanded", true);
      } else {
        cart.setAttribute("data-visible", false);
        cartButton.setAttribute("aria-expanded", false);
      }
  }

  function handleIncrement() {
    
    console.log('clicked')
    setAmount(function (prevAmount) {
      return (prevAmount += 1);
    });
  }

  

  return (
    <div className="App">
        <div className='navBar'>
          <div>
            <img src="/images/icon-menu.svg" alt="" className='icon-menu' />
            <img src="/images/logo.svg" alt="" className='logo'/>
            <a href="" className='link'>Collections</a>
            <a href="" className='link'>Men</a>
            <a href="" className='link'>Women</a>
            <a href="" className='link'>About</a>
            <a href="" className='link'>Contact</a>
          </div>
          <div> 
            <img src="/images/icon-cart.svg" alt="" aria-controls="cart-popup"  aria-expanded="false" className='icon-cart' onClick={openCart}/>
            <img src="/images/image-avatar.png" alt="" className='avatar'/>
          </div>
         
        </div>
        <div id='cart-popup' className='cart-popup' data-visible="false">
            <h5>Cart</h5>
            {cartItems.length ? cartItems.map((item)=>{
              return( <div className='cart-productdetails' key={item.productId}>
              <img src={item.imageProduct} alt="" width={60} height={60} />
              <div className='details-text'>
                <h5>{item.teaser}</h5>
               {amount && <h5>${item.price}.00 x {item.amount} <span style={{fontFamily : 'Kumbh Bold', color : 'black'}}>${item.price*item.amount}.00</span></h5> } 
              </div>
              <AiOutlineDelete size={20} style={{cursor: 'pointer'}} onClick={()=>deleteItem(item.productId)}/>
            </div>)
           
              
            }) : <p style={{fontFamily:'Kumbh Regular', color: 'hsl(220, 13%, 13%)'}}>no item in cart</p>}
           
            <button className='add-cart'>Checkout</button>
          </div>
        <div className='container'>
          <div className='image-container'>
            <div className='product-image' style={{backgroundImage : `url(${product.imageProduct})`}}>
              <div className='arrows'>
              <img src="/images/icon-previous.svg" alt="" />
              <img src="images/icon-next.svg" alt="" />
              </div>;
            </div>
            <div className='product-desktop'>
              <img src="/images/image-product-1-thumbnail.jpg" alt="" />
              <img src="/images/image-product-2-thumbnail.jpg" alt="" />
              <img src="/images/image-product-3-thumbnail.jpg" alt="" />
              <img src="/images/image-product-4-thumbnail.jpg" alt="" />
            </div>
          </div>
        
          <div className="product-infos">
            <h4 className='company-name'>{product.company}</h4>
            <h3 className='product-teaser'>{product.teaser}</h3>
            <p className='product-desc'>{product.description}</p>
            <div className='pricing'>
            <div className='original-price'> 
              <h4 className=''>${product.price}.00</h4>
              <h5 className=''>{product.discount}</h5>
            </div>
            
            <h5 className=''>${product.oldPrice}.00</h5>
            </div>
            <div className="order">
            <div  className='order-quantity'>
              <span className="amount-button"><img src="/images/icon-minus.svg" alt=""  onClick={handleDecrement}/></span>
              <input type="number" value={amount} onChange={onChangeAmount}/>
              <span className="amount-button"> <img src="/images/icon-plus.svg" alt="" className='amount-button' onClick={handleIncrement} /></span>
            </div>
            <button className='add-cart' onClick={addProduct}><AiOutlineShoppingCart size={'1.1rem'}/> <span>Add to cart</span></button>
            </div>   

          </div>
          
        </div>
    </div>
  )
}

export default App
