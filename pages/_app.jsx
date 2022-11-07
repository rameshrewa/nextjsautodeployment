
import "../public/assets/styles/theme.scss";
import "../public/assets/styles/pages/faq.scss";
import Layout from '../layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
