import { TProductItem } from "./mode"

export type TShopDetail = {
  id:string,
  name:string,
  address:string
  phonenumber:string
  email:string
  createdAt:string
  description:string
  user: {
    name:string
  }
  products:Array<TProductItem>
}
