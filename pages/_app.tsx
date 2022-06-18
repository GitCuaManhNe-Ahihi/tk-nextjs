import Head from "next/head";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { TAppPropsWithLayout } from "types/layout";
import { EmptyLayout } from '../components/layout/index';
import "../styles/globals.css";

const client = new ApolloClient({
  uri: 'https://server-graph01.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }: TAppPropsWithLayout) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <ApolloProvider client={client}>
      <Layout>
      <Head>
        <title>TIKI-TECH</title>
        <meta name="description" content="tiki apple's products " />
        <link rel="icon" href="https://salt.tikicdn.com/cache/w500/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png" />
      </Head>
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
