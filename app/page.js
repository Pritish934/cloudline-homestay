import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Rooms from "@/components/Rooms";
import DayInTheLife from "@/components/DayInTheLife";
import Host from "@/components/Host";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-mist">
      <Nav />
      <Hero />
      <Intro />
      <Rooms />
      <DayInTheLife />
      <Host />
      <Location />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}
