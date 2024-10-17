import dynamic from "next/dynamic";
import "./ProductCard.css";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const MobileCard = ({ title, price, rating, image }) => {
  return (
    <Link
      href="/products/123" // Replace 123 with a dynamic ID when available
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="mpcBody">
        <div className="mpcBGtext">{title}</div>
        <div className="mpcConent">
          <div
            className="mpcImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="mpcContentContainer">
            <div>
              <div className="mpcRatingGroup">
                <div className="mpcRatingIcon"></div>
                <div className="mpcRating">{rating}</div>
              </div>
              <div className="mpcProductTitle">{title}</div>
              <div className="mpcProductPrice">{price}</div>
            </div>
            <button className="fancyGreenButton">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const DesktopCard = ({ title, price, rating, image }) => {
  return (
    <Link
      href="/products/123" // Replace 123 with a dynamic ID when available
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="dpcBody">
        <div className="dpcBGtext">{title}</div>
        <div className="dpcConent">
          <div
            className="dpcImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="dpcContentContainer">
            <div>
              <div className="dpcRatingGroup">
                <div className="dpcRatingIcon"></div>
                <div className="dpcRating">{rating}</div>
              </div>
              <div className="dpcProductTitle">{title}</div>
              <div className="dpcProductPrice">{price}</div>
            </div>
            <button className="fancyGreenButton">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

// SKU is for redirecting to products page
export default function ProductCard({
  cardType,
  title,
  price,
  rating,
  image,
  sku,
}) {
  return (
    <div>
      {cardType === "desktop" ? (
        <DesktopCard
          title={title}
          price={price}
          rating={rating}
          image={image}
        />
      ) : (
        <MobileCard title={title} price={price} rating={rating} image={image} />
      )}
    </div>
  );
}
