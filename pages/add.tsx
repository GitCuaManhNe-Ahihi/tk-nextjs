import { useMutation, useQuery } from "@apollo/client";
import { CREATE_MODE, CREATE_SHOP } from "apollo-client/mutation";
import { GET_MODES, GET_SHOPS } from "apollo-client/query";
import { Addmode, Addproduct, Addshop } from "components/add";
import { AppContext } from "components/context/app";
import { MainLayout } from "components/layout";
import Link from "next/link";
import { useContext } from "react";
import styles from '../styles/add.module.css';
type Props = {
};

export default function Add({}: Props) {
  const {user} = useContext(AppContext)

  const [fnmutaion, { loading:loadingaddmode }] = useMutation(CREATE_MODE);
  const [sfnmutation,{loading:loadingaddshop}]= useMutation(CREATE_SHOP);
  const { data:datamode } = useQuery(GET_MODES);
  const {data:datashop} = useQuery(GET_SHOPS)
  if(!user.name)
  {
    return (<>
    <p>Bạn cần đăng nhập để thực hiện chức năng này!</p>
    <Link href="/login">
      <button>Đăng nhập</button>
    </Link>
    </>)
  }
  return (
    <div className={styles.container}>
      <div>
        <Addproduct datamode={datamode} datashop={datashop}/>
      </div>
      <div>
        <Addshop loading={loadingaddshop} fnmutaion={sfnmutation}/>
        <Addmode loading={loadingaddmode} fnmutaion={fnmutaion}/>
      </div>
    </div>
  );
}

Add.Layout = MainLayout;
