import { GET_USER } from "@/apolloclient";
import { TNextPageWithLayout } from "@/types";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainLayout } from "../components/layout/index";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import styles from "../styles/Home.module.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from "next/head";
import Seo from "../components/common/seo";

const Home: TNextPageWithLayout = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: "62aba27873d04c3490633105",
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  const slides = [
    "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/d5/2b/c7/ed55dbe50a6fe3fa697d669a67e0a8c9.png.webp",
    "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/3b/98/93/d1e4c83f862478c23014efe4b21f9e41.png.webp",
    "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/00/23/e4/1bc89f59dd7c4f706e1a9ca1392f8267.png.webp",
    "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/b8/c2/d3/8ddef6073dbeda681834d2be1f675b79.png.webp",
    "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/83/a9/5b/c6a8e3b12d4be6587478e82a8fb0b49f.png.webp",
  ];
  return (
    <div className={styles.container}>
      <Seo/>
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
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                height={400}
                width={1280}
                alt={"san pham"}
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
Home.Layout = MainLayout;

export default Home;
