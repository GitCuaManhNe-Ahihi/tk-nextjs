import Head from "next/head";
import { ApolloClient, ApolloProvider, HttpLink, ApolloLink, InMemoryCache, concat } from "@apollo/client";
import { TAppPropsWithLayout } from "types/layout";
import { EmptyLayout } from '../components/layout/index';
import "../styles/globals.css";
import AppProvider from "components/context/app";
import {createUploadLink} from "apollo-upload-client";
const httpLink = createUploadLink({
    uri: "https://server-graph01.herokuapp.com/graphql"
});
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  }));

  return forward(operation);
})
const client = new ApolloClient({
  link:concat(authMiddleware,httpLink),
  cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }: TAppPropsWithLayout) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <ApolloProvider client={client}>
      <AppProvider>
      <Layout>
      <Head>
        <title>TIKI-TECH</title>
        <meta name="description" content="tiki apple's products " />
        <link rel="icon" href="https://salt.tikicdn.com/cache/w500/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png" />
      </Head>
      <Component {...pageProps} />
      </Layout>
      </AppProvider>
    </ApolloProvider>
  );
}

export default MyApp;
