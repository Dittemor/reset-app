import { Player } from "@lottiefiles/react-lottie-player";
import successAnimation from "../assets/success.json";
import "./OverlayPage.css";

export default function OverlayPage({ selectedPost, onClose }) {
  if (!selectedPost) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlay-box">
        <Player
          autoplay
          loop
          src={successAnimation}
          className="lottie-animation"
        />

        <h2>Godt klaret!</h2>
        <p>Du har klaret en opgave</p>

        <button onClick={onClose}>Luk</button>
      </div>
    </div>
  );
}
