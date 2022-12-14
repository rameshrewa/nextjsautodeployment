import Header from '../layout/header';
import Footer from '../layout/footer';
import Faq from '../components/faq/details'

export default function FaqPage({faqs,Menu,Foot}) {

  return (
    <>
     <Header Header={Menu}/>
    <div >
    <section id="home">
          <Faq faqs={faqs}/>
        </section>
    </div>
    <Footer Footer={Foot}/>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://43.204.232.146:1337/api/pages/?populate=*&filters[Slug][$eq]=faqs')
  const faqs = await res.json()

  const FooterRes = await fetch('http://43.204.232.146:1337/api/footer')
  const FooterData = await FooterRes.json()

  const MenuRes = await fetch('http://43.204.232.146:1337/api/menus/1?populate=*')
  const MenuData = await MenuRes.json()
  
  return {
    props: {
      faqs:faqs,
      Foot: FooterData.data,
      Menu: MenuData.data 
    },
  }
}
