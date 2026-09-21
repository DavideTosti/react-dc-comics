import facebook from "../assets/footer-facebook.png";
import twitter from "../assets/footer-twitter.png";
import youtube from "../assets/footer-youtube.png";
import pinterest from "../assets/footer-pinterest.png";
import periscope from "../assets/footer-periscope.png";

export default function Footer() {
  return (
    <footer
      className="flex p-5 gap-5 "
      style={{
        backgroundColor: "#303030",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <button
        className="bg-transparent text-white uppercase p-3"
        style={{ border: "3px solid #00a6f4" }}
      >
        sign-up now
      </button>
      <div
        className="flex flex-wrap"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <p
          className="uppercase font-bold"
          style={{ color: "#00a6f4", fontSize: "24px" }}
        >
          follow us
        </p>
        <ul className="flex p-3 gap-5">
          <li>
            <img src={facebook} alt="facebook logo" />
          </li>
          <li>
            <img src={twitter} alt="twitter logo" />
          </li>
          <li>
            <img src={youtube} alt="youtube logo" />
          </li>
          <li>
            <img src={pinterest} alt="pinterest logo" />
          </li>
          <li>
            <img src={periscope} alt="periscope logo" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
