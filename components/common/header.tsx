import Search from "../ui/search";
import User from "../user/index";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "../../styles/header.module.css";
import Link from "next/link";
import { AppContext } from "components/context/app";


type Props = {};

export default function Header({}: Props) {
  const {user,setUser} = useContext(AppContext);

  const logout = ()=>{
    localStorage.setItem('user',JSON.stringify({name:'',email:'',address:'',phone:''}));
    localStorage.setItem('token',"");
    setUser({name:'',email:'',address:'',phone:''});
    window.location.reload();
  }
  return (
    <>
      <div className={classes["header"]}>
        <div className={classes["header__container"]}>
         <Link href="/">
         <Image
            src={
              "https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
            }
            alt="logo"
            width={50}
            height={50}
          />
         </Link>
          <div className={classes["header__seeking"]}>
            <Search></Search>
          </div>
          <Link href={user.name?"/info":"/login"}>
          <a>
          <User user={user}/>
          </a>
          </Link>
          <Link href="/cart">
          <a className={classes["header__cart"]}>
            <div className={classes["header__cart-icon"]}>
            <AiOutlineShoppingCart size={40} />
            <span className="number">10</span>
            </div>
            <p>Giỏ hàng</p>
          </a>
          </Link>
           {
              user.name?
              <button onClick={()=>logout()}>Logout </button>
              :null
           }
        </div>

      </div>
    </>
  );
}
