import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PRODUCT } from "apollo-client/mutation";
import { GET_MODES } from "apollo-client/query";
import Input from "components/ui/input";
import React, { useRef, useState } from "react";
import styles from "../../styles/addcomponent.module.css";
type Props = {
  datamode: any;
  datashop: any;
};

export function Addproduct({ datamode, datashop }: Props) {
  const [fn, { loading }] = useMutation(CREATE_PRODUCT);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const storageRef = useRef<HTMLInputElement>(null);
  const madeRef = useRef<HTMLInputElement>(null);
  const idshopRef = useRef<HTMLSelectElement>(null);
  const idmodeRef = useRef<HTMLSelectElement>(null);
 
  const hanleClick = () => {
    const name = nameRef.current?.value;
    const color = colorRef.current?.value;
    const price = priceRef.current?.value;
    const description = descriptionRef.current?.value;
    const storage = storageRef.current?.value;
    const made = madeRef.current?.value;
    if (name && color && price && description && storage && made && file) {
      fn({
        variables: {
          name,
          color,
          price:Number(price),
          description,
          storage,
          made,
          file,
          modeId: idmodeRef.current?.value,
          shopId: idshopRef.current?.value,
        },
      });
      nameRef.current.value = "";
      colorRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      storageRef.current.value = "";
      madeRef.current.value = "";
    } else {
      setError("Bạn cần điền đầy đủ thông tin !");
    }
  };
  return (
    <div className={styles.container_addproduct}>
      <h1>Thêm Product</h1>
      <div className={styles.row}>
        <span>Tên</span>
        <Input
          ref={nameRef}
          props={{ name: "name", id: "name", type: "text" }}
        ></Input>
      </div>
      <div className={styles.row}>
        <span>Màu sắc</span>
        <Input
          ref={colorRef}
          props={{ name: "color", id: "color", type: "text" }}
        ></Input>
      </div>
      <div className={styles.row}>
        <span>Giá</span>
        <Input
          ref={priceRef}
          props={{ name: "price", id: "price", type: "text" }}
        ></Input>
      </div>
      <div className={styles.row}>
        <span>Ảnh</span>
        <input
          type={"file"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFile(event.target.files ? event.target.files[0] : null);
          }}
        ></input>
      </div>
      <div className={styles.row}>
        <span>Xuất xứ</span>
        <Input
          ref={madeRef}
          props={{ name: "made", id: "made", type: "text" }}
        ></Input>
      </div>
      <div className={styles.row}>
        <span>Dung lượng</span>
        <Input
          ref={storageRef}
          props={{ name: "storage", id: "storage", type: "text" }}
        ></Input>
      </div>
      <div className={styles.row}>
        <span>Loại</span>
        <select ref={idmodeRef}>
          {datamode?.modes.map((mode: any, index: number) => (
            <option key={index} value={mode.id}>
              {mode.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.row}>
        <span>Mô tả</span>
        <textarea ref={descriptionRef}></textarea>
      </div>
      <div className={styles.row}>
        <span>Shop</span>
        <select ref={idshopRef}>
          {datashop?.shops.map((mode: any, index: number) => (
            <option key={index} value={mode.id}>
              {mode.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={hanleClick}>{loading ? "loading..." : "Thêm"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
