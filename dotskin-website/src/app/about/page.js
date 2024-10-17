// Poducts Catalog
import dynamic from "next/dynamic";
import "../global.css";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});

export default function ProductsCatalog() {
  return (
    <div className="clientWebsiteContainer">
      <Navbar />
      <div className="clientWebsiteContent">
        <h1>This is the about page</h1>
        <div className="testBlock"></div>
      </div>
    </div>
  );
}
