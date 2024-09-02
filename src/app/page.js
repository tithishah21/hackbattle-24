import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Notifs from "./components/Notifs";

export default function Home() {
  return (
    <main classname="bg-green-300 p-4">
      <Navbar />
      <Marquee />
      <Notifs cleared = {1}/>
    </main>
  );
}
