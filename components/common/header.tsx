import Search from "components/ui/search/search";
import User from "components/user/User";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "../../styles/header.module.css";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className={classes["header"]}>
        <div className={classes["header__container"]}>
          <Image
            src={
              "https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
            }
            alt="logo"
            width={50}
            height={50}
          />
          <div className={classes["header__seeking"]}>
            <Search></Search>
          </div>
          <User/>
          <div className={classes["header__cart"]}>
            <div className={classes["header__cart-icon"]}>
            <AiOutlineShoppingCart size={40} />
            <span className="number">10</span>
            </div>
            <p>Giỏ hàng</p>

          </div>
        </div>
      </div>
    </>
  );
}
