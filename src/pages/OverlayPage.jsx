import Lottie from "lottie-react";
import successAnimation from "../assets/success.json";
import "./OverlayPage.css";

export default function OverlayPage({ selectedPost, onClose }) {
  if (!selectedPost) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlay-box">
        <Lottie
          animationData={successAnimation}
          loop={false}
          className="lottie-animation"
        />

        <h2>Godt klaret!</h2>
        <p>Du har klaret en opgave</p>

        <button onClick={onClose}>Luk</button>
      </div>
    </div>
  );
}
