import React from 'react'

const Products = ({product}) => {
  return (
    <>
      <h1>Product Page</h1>
      {product.map( (x,index)=>{
        return (
            <div key={index}>
                <h1>{x.title}</h1>
                <img src={x.image} height="150px" width="150px"  />
                <h1>Price : ${x.price}</h1>
                <p>Specification : {x.description}</p>
                <h3>Rating : {x.rating.rate}</h3>
                <h3>Available : {x.rating.count} piece</h3>
                <button>Add to Cart</button>
            </div>
        )
      })}
    </>
  )
}

export default Products
