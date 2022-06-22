export type TMode = {
  id: string;
  url: string;
  products: Array<TProductItem>;
}

export type TProductItem =
  {
    id: string;
    name: string;
    price: number;
    image: string;
  }

