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
  sellerId: string
}

export interface IOrder {
  _id: string
  productId: string
  quantity: number
  productImage: string
  productName: string
}

export interface IHistory {
  _id: string
  name: string
  address: string
  phone: string
  total: number
  items: IOrder[]
}
