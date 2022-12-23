import './App.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
function App() {
  const [amount, setAmount]=useState(0);
  const onChangeAmount=(e)=>{
    setAmount(e.target.value)
    
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
          </div>
          <div> 
            <img src="/images/icon-cart.svg" alt="" className='icon-cart' />
            <img src="/images/image-avatar.png" alt="" className='avatar'/>
          </div>
        </div>
        <div className='container'>
          <div className='product-image'>
            <div className='arrows'>
            <img src="/images/icon-previous.svg" alt="" />
            <img src="images/icon-next.svg" alt="" />
            </div>
          </div>
          <div className="product-infos ">
            <h4 className='company-name'>SNEAKER COMPANY</h4>
            <h3 className='product-teaser'>Fall Limited Edition Sneakers</h3>
            <p className='product-desc'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className='pricing'>
            <div className='original-price'> 
              <h4 className=''>$125.00</h4>
              <h5 className=''>50% </h5>
            </div>
            
            <h5 className=''>$250.00</h5>
            </div>
            <div  className='order-quantity'>
              <img src="/images/icon-minus.svg" alt="" onClick={handleDecrement}/>
              <input type="number" value={amount} defaultValue={0} onChange={onChangeAmount}/>
              <img src="/images/icon-plus.svg" alt="" onClick={handleIncrement} />
            </div>
            <button className='add-cart' ><AiOutlineShoppingCart size={'1.3rem'}/> <span>Add to cart</span></button>
            

          </div>
          
        </div>
    </div>
  )
}

export default App
