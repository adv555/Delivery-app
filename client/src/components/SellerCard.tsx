import React from 'react'
import { Typography } from './Typography/Typography'

interface SellerCardProps {
  name: string
  image?: string
  onClick?: () => void
}

export const SellerCard: React.FC<SellerCardProps> = ({ name, image, onClick }) => {
  return (
    <div className="flex flex-col shadow-card mb-5 rounded-xl hover:shadow-lg" onClick={onClick}>
      <div className="flex flex-raw p-2 items-center justify-start ">
        <div className=" mr-3">
          {image && (
            <div className=" w-20">
              <img
                src={image}
                alt={name}
                className=" block w-16 h-16 rounded-lg overflow-hidden "
              />
            </div>
          )}
        </div>
        <div className="mr-3">
          <Typography
            type={'h4'}
            children={name}
            className=" inline-block text-text-dark uppercase"
          />
        </div>
      </div>
    </div>
  )
}
