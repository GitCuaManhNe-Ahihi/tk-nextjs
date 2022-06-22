import { useQuery } from "@apollo/client";
import { GET_ALLPRODUCT, GET_PRODUCT } from "apollo-client/query";
import { MainLayout } from "components/layout";
import Product from "components/product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TProductDetail } from "types/detailproduct";
import styles from "../../styles/productdetail.module.css";

type Props = {
};

export default function ProductDetail({}: Props) {
  const router = useRouter()
 const id=router.query.productId
 console.log(id)
  const {data,loading,error} = useQuery(GET_PRODUCT,{
    variables:{
      productId:id
    }
  })
  if(loading) return <p>loading...</p>
  if(error) return <p>có lỗi!</p>
  const product:TProductDetail = data.product
  return (
    <div className={styles["product-detail"]}>
      <div className={styles["product-container"]}>
        <div className={styles["product"]}>
          <Image
            src={product.image}
            alt="apple tiki"
            height={400}
            width={400}
          />
          <div className={styles["product__descrpiton"]}>
            <h3>Tên: {product.name}</h3>
            <h5>Giá: {product.price} vnđ </h5>
            <p>Màu: {product.color}</p>
            <p>Dung lượng: {product.storage}</p>
            <p>Xuất xứ:{product.made} </p>
            <p>Mô tả:{product.description}</p>
            <span>Số lượng mua:</span>
            <input type="number" min={0} max={100} />
            <button>chọn mua</button>
          </div>
        </div>
        <div className={styles["info-shop"]}>
          <h3>{product.shop?.name}</h3>
          <div>
            <p>Số điện thoại: {product.shop?.phonenumber} </p>
            <p>Địa chỉ: {product.shop?.address}</p>
          </div>
          <Link href={`/shops/${product.shop?.id}`}>
            <button>xem shop</button>
          </Link>
        </div>
      </div>
      <div className={styles["same-product"]}>
        <h3>Sản phẩm cùng loại</h3>
        <div className={styles["product-list"]}>
          {
            product.same?.map(
              item => item.id === product.id?null:<Product key={item.id} product={item}/>
            )
          }
        </div>
      </div>
    </div>
  );
}

ProductDetail.Layout = MainLayout;
