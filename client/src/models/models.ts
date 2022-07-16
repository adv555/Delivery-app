export interface ISeller {
  _id: string;
  userId: string;
  name: string;
  image: string;
  coupons?: any[];
  orders?: string[];
  products?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface ServerResponse {
  data: ISeller[];
}
