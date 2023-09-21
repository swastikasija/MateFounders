import Hero from "../components/Counter";
import Founder from "../components/Founder";
import Loader from "../components/Loader";
import MakeHeading from "../components/Main-Heading";
import Navbar from "../components/Navbar";
import FetchNews from "../components/News";
import Organize from "../components/Organize";
import Upcoming from "../components/Upcoming";
import Whatweare from "../components/Whatweare";

export default function Home() {
  return (
    <>
      <MakeHeading />
      <Hero />
      <Upcoming />
      <Whatweare />
      <Founder />
      {/* <Organize /> */}
    </>
  );
}
