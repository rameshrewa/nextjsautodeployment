import Banner from '../components/home/banner'
import Details from "../components/home/details";
import Ashram from "../components/home/ashram";
import Bookstay from "../components/home/Bookstay"
import Facilitiesmedia from "../components/home/Facilitiesmedia"
import Farming from "../components/home/Farming"
import Appinfo from "../components/home/Appinfo"
import Heartsport from "../components/home/Heartsport"
import Magazine from "../components/home/Magazine"
import Contactus from "../components/home/Contactus"

export default function Home({Home}) {
  const { Content } = Home;
  return (
    <div >
    <section id="home">
          <Banner Banner={Content[0]}/>
        </section>
        <section id="details">
          <Details Details={Content[1]}/>
        </section>
        <section id="ashram">
          <Ashram Ashram={Content[2]}/>
        </section>
         <section>
          <Facilitiesmedia Facility={Content[3]}/>
        </section>
        <section id="bookastay">
          <Bookstay Bookstay={Content[4]}/>
        </section>
        <section id="farming">
          <Farming Farming={Content[5]}/>
        </section>
        <section>
          <Appinfo />
        </section>
        <section>
          <Heartsport Heartsport={Content[5]}/>
        </section>
        <section>
          <Magazine Mgzine={Content[6]}/>
        </section>
        <section id="contactus">
          <Contactus />
        </section>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://43.204.232.146:1337/api/pages/?populate=*&filters[Slug][$eq]=home')
  const Home = await res.json()
  
  
  return {
    props: {
      Home: Home.data[0].attributes
    },
  }
}