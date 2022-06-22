import { useQuery } from "@apollo/client";
import { GET_SHOP } from "apollo-client/query";
import { MainLayout } from "components/layout";
import Product from "components/product";
import { useRouter } from "next/router";
import React from "react";
import { TShopDetail } from "types/shop";
import styles from "../../styles/shopdetail.module.css";

type Props = {};

export default function ShopDetail({}: Props) {
  const router = useRouter();
  const id = router.query.shopId;
  const { data, loading, error } = useQuery(GET_SHOP, {
    variables: {
      shopId: id,
    },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>có lỗi!</p>;
  const shop:TShopDetail = data.shop
  return (
    <div className={styles["shop-container"]}>
      <div className={styles["shop-info"]}>
        <h1>{shop.name}</h1>
        <p>Địa chỉ: {shop.address}</p>
        <p>Số điện thoại: {shop.phonenumber}</p>
        <p>Email: {shop.email}</p>
        <p>Mô tả cửa hàng: {shop.description}</p>
        <p>Năm tham gia: {(new Date(+shop.createdAt)).getFullYear()} </p>
        <p>Chủ sở hữu: {shop.user.name}</p>
      </div>
      <div className="product__shop">
        <h2>Sản phẩm của cửa hàng</h2>
        <div className="product-list">
          {
            shop.products.map(item => (<Product key={item.id} product={item}/>))
          }
        </div>
      </div>
    </div>
  );
}

ShopDetail.Layout = MainLayout;
