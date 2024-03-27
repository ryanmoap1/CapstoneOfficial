import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
     <div className='descriptionbox-nav-box'>Description</div>
     <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
        <div className="descriptionbox-description">
            <p>An e-commerce site serves as an online platform where businesses can showcase and sell their products or services to 
                customers over the internet. These websites provide a digital marketplace where buyers can browse through a wide range 
                of products, compare prices, read reviews, and make purchases conveniently from the comfort of their own homes. E-commerce 
                sites typically feature intuitive user interfaces, allowing users to search for specific items or explore various categories 
                and departments easily.</p>
                <p>
                They often incorporate secure payment gateways to facilitate smooth and secure transactions, ensuring the 
                safety of customers' personal and financial information. Additionally, many e-commerce platforms offer features such as wishlists, 
                personalized recommendations, order tracking, and customer support services to enhance the overall shopping experience. Overall, 
                e-commerce sites play a crucial role in modern retail, offering unparalleled convenience and accessibility to both businesses and 
                consumers in the digital age.
                </p>
        </div>
    </div>
  )
}

export default DescriptionBox 
