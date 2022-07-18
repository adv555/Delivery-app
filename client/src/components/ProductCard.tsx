import React from 'react'

import { clsx } from 'clsx'
import { Typography } from './Typography/Typography'

interface ProductCardProps {
  name: string
  image?: string
  price?: number
  className?: string
  button?: React.ReactNode
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  button,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col shadow-card', className)}>
      <div className="h-48 w-full border">
        {image && <img src={image} alt={name} className=" block h-full w-full object-fill" />}
      </div>
      <div className="flex flex-col p-2">
        <div className="mt-1 flex">
          <Typography
            type={'Ag-18-semibold'}
            children={name}
            className=" inline-block text-text-light"
          />
        </div>
        {button && (
          <div className="flex items-center justify-between  mt-1 mb-1">
            <div className="text-text-light font-medium">
              <span className="mr-2">{price?.toFixed(2)}</span>UAH
            </div>
            <div>{button}</div>
          </div>
        )}
      </div>
    </div>
  )
}
