import React from 'react'
import {AiOutlineUser,AiFillCaretDown} from 'react-icons/ai'
import classes from '../../styles/user_style.module.css'
type Props = {}

export default function User({}: Props) {
  return (
    <div className={classes['user-container']}>
      <AiOutlineUser size={40} className='user-icon'/>
      <div className= {classes['left']}>
        <p> {true?"đăng nhập/đăng kí":"Hoàng Mạnh"}</p>
        <a>tài khoản <AiFillCaretDown/></a>
      </div>
    </div>
  )
}
