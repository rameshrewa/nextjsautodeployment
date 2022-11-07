import Nursery from '../components/aboutus/details'

export default function AboutUs({about}) {
  return (
    <div >
    <section id="home">
          <Nursery about={about}/>
        </section>
       
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://43.204.232.146:1337/api/pages/?populate=*&filters[Slug][$eq]=about-us')
  const about = await res.json()
  
  return {
    props: {
      about:about.data[0].attributes
    },
  }
}