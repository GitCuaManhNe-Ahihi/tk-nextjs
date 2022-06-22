import Image from "next/image";
import Link from "next/link";
import { TProductItem } from "types/mode";
import styles from "../styles/Home.module.css";
type TProps = {
  product:TProductItem
};

export default function Product({ product }: TProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.product}>
        <Image src={product.image} alt="apple tiki" height={250} width={280} />
        <div className={styles.desciption}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>Giá bán: {product.price} vnđ</p>
          </div>
        </div>
    </Link>
  );
}
