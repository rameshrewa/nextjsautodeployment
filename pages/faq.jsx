import Faq from '../components/faq/details'
export default function FaqPage({faqs}) {

  return (
    <div >
    <section id="home">
          <Faq faqs={faqs}/>
        </section>
       
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://43.204.232.146:1337/api/pages/?populate=*&filters[Slug][$eq]=faqs')
  const faqs = await res.json()
  
  return {
    props: {
      faqs:faqs
    },
  }
}
