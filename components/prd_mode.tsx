import Image from "next/image";
import React from "react";
import { TMode } from "types/mode";
import styles from "../styles/Home.module.css";
import Product from "./product";
type Props = {
  mode: TMode
};

export default function ProductOfMode({ mode }: Props) {
  return (
    <div className={styles.products_follow_mode}>
      <Image
        src={mode.url}
        className={styles.heading}
        alt="apple tiki"
        height={1000}
        width={2000}
      />
      <div className={styles.products_follow_mode__container}>
        {mode.products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
