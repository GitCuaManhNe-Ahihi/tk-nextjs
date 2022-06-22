import { TMode, TNextPageWithLayout } from "@/types";
import { useQuery } from "@apollo/client";
import { GET_ALLMODE } from "apollo-client/query";
import ProductOfMode from "components/prd_mode";
import Image from "next/image";
import Seo from "../components/common/seo";
import { MainLayout } from "../components/layout/index";
import SwiperCustom from "../components/ui/swiper/index";
import { slides } from "../data/index";
import styles from "../styles/Home.module.css";

const Home: TNextPageWithLayout = () => {
  const { data, loading, error } = useQuery(GET_ALLMODE);
  if (loading) {
    return <p style={{ color: "blue" }}>loading....</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>có lỗi xảy ra</p>;
  }
  return (
    <div className={styles.container}>
      <Seo />
      <Image
        src={
          "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/80/8e/82/bce635ee6888d36805e7c50d7aa29642.png.webp"
        }
        className={styles.heading}
        alt="apple tiki"
        height={200}
        width={2000}
      />
      <div className={styles.swiper__slide}>
        <SwiperCustom slides={slides} />
      </div>
      <Image
        src={
          "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/9d/43/22/1688268071d3b5d6efa6b938616e91a3.png.webp"
        }
        className={styles.heading}
        alt="apple tiki"
        height={200}
        width={2000}
      />
       {
          data.modes.map((item:TMode)=>(<ProductOfMode key={item.id} mode={item}/>))
        }
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
