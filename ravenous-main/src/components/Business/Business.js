import React from 'react'
import './Business.css'

const business = {
    imageSrc : 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name : 'Superior Smart Home',
    address : '561 Rivercliff Trce',
    city : 'Marietta',
    state : 'GA',
    zipcode : 30067,
    category : 'SMART HOME',
    rating : '5.0 stars',
    reviewCount : '2 reviews',
}

function Business() {
    return (
        <div className='business'>
            <img className='img' src={business.imageSrc} alt='business logo'/>
            <h1 className='name' alt='business image'>{business.name}</h1>

            <section className='details'>
                <section className='address'>
                    <h2 className='address'>{business.address}</h2>
                    <p className='city'>{business.city}</p>
                    <p className='state+zipcode'>{business.state} {business.zipcode}</p>
                </section>

                <section className='category-ratings'>
                    <h2 className='category'>{business.category}</h2>
                    <h3 className='rating'>{business.rating}</h3>
                    <p className='reviews'>{business.reviewCount}</p>
                </section>
            </section>
        </div>
    )
}

export default Business