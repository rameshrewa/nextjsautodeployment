
import "../public/assets/styles/theme.scss";
import "../public/assets/styles/pages/faq.scss";
import Layout from '../layout/layout'

function MyApp({ Component, pageProps}) {
  // console.log(pageProps)
  return (
    <Layout Layout={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
