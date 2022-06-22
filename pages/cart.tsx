import { MainLayout } from "components/layout";
import Image from "next/image";
import React from "react";
import styles from '../styles/cart.module.css'
type Props = {
};

export default function Cart({}: Props) {
  return (
    <div className={styles.cart_container}>
      <div className={styles.left}>
        <h1>Giỏ Hàng</h1>
          <div className={styles['cart-shop']}>
            <div className="headingshop">
              <input type="checkbox" />
              <a href="#"> tên shop </a>
            </div>
            <div className={styles['cart-items']}>
              <div className={styles['cart-item']}>
                <input type="checkbox" />
                <Image
                  src={
                    "https://salt.tikicdn.com/cache/w78/ts/product/9e/b6/cc/e9949480477bff83ac5cd05809c09bfd.jpg.webp"
                  }
                  alt="apple tiki"
                  height={50}
                  width={50}
                />
                <p>description</p>
                <input type={"number"} defaultValue={1} min={0} max={100}></input>
                <p>tong</p>
                <button>xoa</button>
              </div>
          </div>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["info"]}>
        <div  className={styles["info-item"]}>
            <p> ten </p>
            <p>sdt dia chi</p>
          </div>
          <div  className={styles["info-item"]}>
            <p>tong tien thanh toan</p>
            <p>0</p>
          </div>
        </div>
        <button className={styles.pay}>Mua Hàng</button>
      </div>
    </div>
  );
}

Cart.Layout = MainLayout;
