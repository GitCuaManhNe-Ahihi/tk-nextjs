import { AppContext } from 'components/context/app';
import Input from 'components/ui/input'
import React, { useContext } from 'react'
import styles from "../../styles/addcomponent.module.css";

  type Props = {
    fnmutaion:  any;
    loading: boolean;
  };


export  function Addshop({loading,fnmutaion}: Props) {
  const {user} = useContext(AppContext)
  const nameRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const phoneRef = React.useRef<HTMLInputElement>(null)
  const addressRef = React.useRef<HTMLInputElement>(null)
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null)
  const [error,setError] = React.useState('')
  const handleClick = async () => {
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const phone = phoneRef.current?.value
    const address = addressRef.current?.value
    const description = descriptionRef.current?.value
    if (name && email && phone && address && description) {
      fnmutaion({
        variables: {
           name,email,phonenumber:phone,address,description,userId:user.id
        },
        refetchQueries: ["GetShops"]
      })
      nameRef.current.value =''
      emailRef.current.value =''
      phoneRef.current.value =''
      addressRef.current.value =''
      descriptionRef.current.value=''
    }
    else{
      setError('Vui lòng nhập đầy đủ thông tin')
    }

  }

  return (
    <div className={styles.container_addshop}>
      <h1>Thêm Shop</h1>
      <div className={styles.row}>
        <span>Tên</span><Input ref={nameRef} props={{name:"name",id:"name",type:"text"}}></Input>
      </div>
      <div className={styles.row}>
        <span>Email</span><Input ref={emailRef} props={{name:"email",id:"email",type:"text"}}></Input>
      </div>
      <div className={styles.row}>
        <span>Số điện thoại</span><Input ref={phoneRef} props={{name:"phone",id:"phone",type:"text"}}></Input>
      </div>
      <div className={styles.row}>
        <span>Địa chỉ</span><Input ref={addressRef} props={{name:"address",id:"address",type:"text"}}></Input>
      </div>
      <div className={styles.row}>
        <span>Mô tả</span><textarea ref={descriptionRef}  ></textarea>
      </div>
      {
        error && <div style={{color:'red'}}>{error}</div>
      }
      <button onClick={handleClick}>{loading?"loading...":"Thêm"}</button>
    </div>
  )
}
