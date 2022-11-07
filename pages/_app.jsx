
import "../public/assets/styles/theme.scss";
import "../public/assets/styles/pages/faq.scss";
import Layout from '../layout/layout'

function MyApp({ Component, pageProps}) {
  return (
    <Layout Layout={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://43.204.232.146:1337/api/footer')
  const Layout = await res.json()
  
  return {
    props: {
      Layout: Layout.data[0].attributes
    },
  }
}


export default MyApp
