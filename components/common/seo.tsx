import Head from 'next/head'
import React from 'react'

type Props = {}

export default function Seo({}: Props) {
  return (
    <Head>
    <title>tk technology product (test)</title>
    <meta name="title" content="tk technology product (test)"/>
    <meta name="description" content="with tk-tech, we provide all technology-related products"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://tk-nextjs.vercel.app/"/>
    <meta property="og:title" content="tk technology product (test)"/>
    <meta property="og:description" content="with tk-tech, we provide all technology-related products"/>
    <meta property="og:image" content="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/80/8e/82/bce635ee6888d36805e7c50d7aa29642.png.webp"/>
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://tk-nextjs.vercel.app/"/>
    <meta property="twitter:title" content="tk technology product (test)"/>
    <meta property="twitter:description" content="with tk-tech, we provide all technology-related products"/>
    <meta property="twitter:image" content="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/80/8e/82/bce635ee6888d36805e7c50d7aa29642.png.webp"/>
</Head>
  )
}
