import Banner from '../components/home/banner'
import Details from "../components/home/details";
import Ashram from "../components/home/ashram";

export default function Home() {
  return (
    <div >
    <section id="home">
          <Banner />
        </section>
        <section id="details">
          <Details />
        </section>
        <section id="ashram">
          <Ashram />
        </section>
    </div>
  )
}
