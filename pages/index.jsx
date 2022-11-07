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
        <section>
          <Facilitiesmedia />
        </section>
        <section id="bookastay">
          <Bookstay />
        </section>
        <section id="farming">
          <Farming />
        </section>
        <section>
          <Appinfo />
        </section>
        <section>
          <Heartsport />
        </section>
        <section>
          <Magazine />
        </section>
        <section id="contactus">
          <Contactus />
        </section>
    </div>
  )
}
