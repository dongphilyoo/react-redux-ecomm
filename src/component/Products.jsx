import React, { useState, useEffect } from 'react'

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)

  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch(
        'https://asos2.p.rapidapi.com/products/v3/detail?id=9851612&lang=en-US&store=US&sizeSchema=US&currency=USD',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'asos2.p.rapidapi.com',
            'x-rapidapi-key':
              '49f0efef13mshea42d28781e5530p1b4408jsne991abab5818',
          },
        }
      )
      // .then((response) => {
      //   console.log(response.properties)
      // })
      // .catch((err) => {
      //   console.error(err)
      // })
      const data = await response.json()
      console.log(data)
    }
    getProducts()
  }, [])

  return <div></div>
}

export default Products
