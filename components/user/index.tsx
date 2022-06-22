import React from 'react'
import {AiOutlineUser,AiFillCaretDown} from 'react-icons/ai'
import classes from '../../styles/user_style.module.css'
type Props = {
  user: {name:string,email:string}
}

export default function User({user}: Props) {
  return (
    <div className={classes['user-container']}>
      <AiOutlineUser size={40} className='user-icon'/>
      <div className= {classes['left']}>
        <p> {!user.name?"đăng nhập/đăng kí":user?.name}</p>
        <a>tài khoản <AiFillCaretDown/></a>
      </div>
    </div>
  )
}
