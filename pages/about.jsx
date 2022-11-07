import Header from '../layout/header';
import Footer from '../layout/footer';
import Nursery from '../components/aboutus/details'

export default function AboutUs({about,Menu,Foot}) {
  return (
    <>
     <Header Header={Menu}/>
    <div >
    <section id="home">
          <Nursery about={about}/>
        </section>
       
    </div>
     <Footer Footer={Foot}/> 
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://43.204.232.146:1337/api/pages/?populate=*&filters[Slug][$eq]=about-us')
  const about = await res.json()

  const FooterRes = await fetch('http://43.204.232.146:1337/api/footer')
  const FooterData = await FooterRes.json()

  const MenuRes = await fetch('http://43.204.232.146:1337/api/menus/1?populate=*')
  const MenuData = await MenuRes.json()
  
  return {
    props: {
      about:about.data[0].attributes,
      Foot: FooterData.data,
      Menu: MenuData.data 
    },
  }
}