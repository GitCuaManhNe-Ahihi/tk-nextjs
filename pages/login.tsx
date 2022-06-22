import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "apollo-client/query";
import { AppContext } from "components/context/app";
import { EmptyLayout } from "components/layout";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import style from "../styles/login.module.css";
type Props = {};

export default function Login({}: Props) {
  const {setUser} = useContext(AppContext);
  const router = useRouter();
  const [login, { data, loading, error }] = useLazyQuery(LOGIN);
  const userName = useRef<HTMLInputElement>(null);
  const passWord = useRef<HTMLInputElement>(null);
  const handleSubmit = async () => {
    const userNameValue: string = userName.current?.value || "";
    const passWordValue: string = passWord.current?.value || "";
    if (userNameValue && passWordValue) {
      login({
        variables: {
          email: userNameValue,
          password: passWordValue,
        },
      });
      if (error) {
        alert(error.message);
      }
      if (data) {
        console.log(data.login);
        localStorage.setItem("token", data.login.accessToken);
        setUser({...data.login});
        router.push("/");

      }
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };
  return (
    <div className={style["form-login"]}>
      <h1>Login TK</h1>
      <input ref={userName} type="text" placeholder="username" />
      <input ref={passWord} type="password" placeholder="password" />
      <button onClick={() => handleSubmit()}>
        {loading ? "loading...." : "login"}
      </button>
    </div>
  );
}
Login.Layout = EmptyLayout;
