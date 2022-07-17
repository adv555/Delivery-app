export interface ISeller {
  _id: string
  name: string
  image: string
  coupons?: any[]
  orders?: string[]
  products?: string[]
  createdAt?: Date
  updatedAt?: Date
}

export interface IProduct {
  _id: string
  name: string
  price: number
  image: string
}

export interface ICart {}
