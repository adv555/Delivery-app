import React, { useEffect, useState } from 'react'
import { fetchSellers } from '../store/actions/seller.actions'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ProductCard } from '../components/ProductCard'
import { SellerCard } from '../components/SellerCard'
import { fetchProducts } from '../store/actions/product.actions'
import { addToCart } from '../store/slices/cart.slice'
import { getAllProducts, getAllSellers } from '../store/selectors/product.selectors'
import { getActiveSeller } from '../store/selectors/cart.selectors'

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { sellers } = useAppSelector(getAllSellers)
  const products = useAppSelector(getAllProducts)
  const activeSellerId = useAppSelector(getActiveSeller)

  const checkActiveSeller = (ProductId: string) => {
    if (!activeSellerId) {
      return
    }
    if (activeSellerId === products[ProductId].sellerId) {
      return false
    }
    return true
  }

  useEffect(() => {
    dispatch(fetchSellers())
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-6 sm:px-0 sm:flex-row sm:items-start gap-4">
        <div className="max-h-screen sm:h-screen sm:w-1/3 ">
          <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
            {sellers.map(seller => (
              <div key={seller._id + seller.name}>
                <SellerCard
                  name={seller.name}
                  image={seller.image}
                  onClick={() => console.log(seller._id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/3 h-screen">
          <div className="flex items-start justify-around flex-wrap h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200 gap-3 ">
            {Object.values(products).map(product => (
              <div key={product._id} className="">
                <ProductCard
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  onClick={() => {
                    dispatch(addToCart(product._id))
                  }}
                  className="w-72 h-72 border rounded-lg overflow-hidden"
                  disabled={checkActiveSeller(product._id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
