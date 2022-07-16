export interface ISeller {
  _id: string
  userId: string
  name: string
  image: string
  coupons?: any[]
  orders?: string[]
  products?: string[]
  createdAt?: Date
  updatedAt?: Date
  __v?: number
}

export interface IProduct {
  _id: string
  sellerId: string
  name: string
  price: number
  image: string
}

export interface ICart {}
