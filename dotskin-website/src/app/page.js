import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import "./global.css";

export default function Home() {
  return (
    <div className="clientWebsiteContainer">
      <Navbar />
      <div className="clientWebsiteContent">
        <h1>This is the HomePage</h1>
      </div>
    </div>
  );
}
