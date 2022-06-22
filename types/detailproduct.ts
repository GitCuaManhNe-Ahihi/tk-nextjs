import { TProductItem } from "./mode";

export type TShopOf = {
  id: string;
  phonenumber: string;
  address: string;
  name: string;
};

export type TProductDetail = {
  id: string;
  image: string;
  name: string;
  price: string;
  color: string;
  storage: string;
  made: string;
  description: string;
  shop: TShopOf;
  same:Array<TProductItem>
};
