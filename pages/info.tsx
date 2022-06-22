import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "apollo-client/mutation";
import { AppContext } from "components/context/app";
import { MainLayout } from "components/layout";
import Link from "next/link";
import { useContext, useRef } from "react";
import styles from "../styles/info.module.css";

type Props = {};

export default function Info({}: Props) {
  const {user,setUser} = useContext(AppContext)
  const [fnMutaion, { loading }] = useMutation(UPDATE_USER);
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async () => {
    const nameValue: string = nameRef.current?.value || "";
    const addressValue: string = addressRef.current?.value || "";
    const phoneNumberValue: string = phoneNumberRef.current?.value || "";
    const  id:string = user.id;
    fnMutaion({
      variables: {
        name: nameValue,
        address: addressValue,
        phonenumber: phoneNumberValue,
        id: id,
      }}).then(() => {
        setUser({...user,name:nameValue,address:addressValue,phonenumber:phoneNumberValue})
      })
  }
  if(user.name === ""){
    return <>
    <p>Bạn cần đăng nhập</p>
    <Link href="/login">
      <button>Đăng nhập</button>
    </Link>
    </>
  }
  return (
    <div className={styles.info}>
      <h1>Thông tin tài khoản</h1>
      <div className={styles.info_container}>
        <h4>Thông tin cá nhân</h4>
        <div>
          <div className={styles.row}>
            <label>Tên</label>
            <input ref={nameRef} type="text" defaultValue={user.name}/>
          </div>
          <div className={styles.row}>
            <label htmlFor="">địa chỉ</label>
            <input ref={addressRef} type="text" defaultValue={user.address}/>
          </div>
          <div className={styles.row}>
            <label htmlFor="">số điện thoại</label>
            <input ref={phoneNumberRef} type="text" defaultValue={user.phonenumber}/>
          </div>
          <div className={styles.row}>
            <label htmlFor="" >email</label>
            <input type="text"  defaultValue={user.email} disabled/>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>{loading?"loading...":"Lưu thay đổi"}</button>
      <Link href="/add">
      <button style={{margin:'20px auto'}}>Thêm Sản Phẩm</button>
      </Link>
    </div>
  );
}

Info.Layout = MainLayout;
