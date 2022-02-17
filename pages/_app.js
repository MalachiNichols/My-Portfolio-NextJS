import Layout from "../components/Layout";
import config from '../src/aws-exports'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
