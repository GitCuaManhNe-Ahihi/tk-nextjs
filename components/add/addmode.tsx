import Input from "components/ui/input";
import React, { useState } from "react";
import styles from "../../styles/addcomponent.module.css";
type Props = {
  fnmutaion:  any;
  loading: boolean;
};

export function Addmode({fnmutaion,loading}: Props) {
  const [file,setFile] = useState<File|null>(null)
  const nameRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const [error,setError] = React.useState('')
  const handleClick = async () => {
    if (nameRef.current?.value && descriptionRef.current?.value) {
      console.log(file)
      fnmutaion({
        variables: {
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          file:file
        },
        refetchQueries: ["GetModes"]
      })
      nameRef.current.value = "";
      descriptionRef.current.value = "";
    }
    else{
      setError('Vui lòng nhập đầy đủ thông tin')
    }
  };


  return (
    <div className={styles.container_addmode}>
      <h1>Thêm Mode</h1>
      <div className={styles.row}>
        <span>Tên</span>
        <Input
          ref={nameRef}
          props={{ name: "name", id: "name", type: "text" }}
        ></Input>
      </div>
      <div className={styles.row}>
        <span>Ảnh</span>
        <input
          type={"file"}
          onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
            setFile(event.target.files?event.target.files[0]:null)
          }}
        ></input>
      </div>
      <div className={styles.row}>
        <span>Mô tả</span>
        <textarea ref={descriptionRef}></textarea>
      </div>
      {
        error && <div style={{color:'red'}}>{error}</div>
      }
      <button onClick={handleClick}>{!loading ? "Thêm" : "Loading..."}</button>
    </div>
  );
}
