import React from 'react'

export default function SnackView({photoUrl, title, description, price}) {
  console.log(`${photoUrl} ${title} ${description} ${price}`)
  return (
    <div className="snackView">
      <img src={photoUrl} className="snackview--image"/>
      <h1 className='snackview--title'>{title}</h1>
      <h3 className='snackview--description'>{description}</h3>
      <h3 className='snackview--price'>{price}</h3>
      
    </div>
  )
}
