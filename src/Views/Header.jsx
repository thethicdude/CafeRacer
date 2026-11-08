import icedEspresso from "../assets/images/Silky Iced Espresso Tumbler.png";
import logo from "../assets/images/logo192.png";
import "./Header.css";
import Navbar from "./Navbar";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const features = [
  { icon: "drop", text: "65% Less acidity" },
  { icon: "cup", text: "2x More Caffeine" },
  { icon: "clock", text: "16-hour steeped" },
];

const Icon = ({ name }) => {
  const paths = {
    bag: <path d="M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2" />,
    drop: (
      <path d="M12 2s-7 8-7 13a7 7 0 0 0 14 0c0-5-7-13-7-13ZM8 15a4 4 0 0 0 4 4" />
    ),
    cup: (
      <>
        <path d="M3 10h13v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-5Zm13 1h2a3 3 0 0 1 0 6h-2" />
        <path d="M6 6c2-2-1-2 1-4m4 4c2-2-1-2 1-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l-4 3" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const tagline = "Pure Caffeine Nothing Extra";

const Header = ({ user }) => {
  const [heroVersion, setHeroVersion] = useState(0);

  const replayHero = () => {
    setHeroVersion((version) => version + 1);
  };
  return (
    <header className="cr-header" id="home">
      <div className="cr-fold">
        <span className="cr-watermark" aria-hidden="true">
          CafeRacer
        </span>

        <div className="cr-topbar">
          <a className="cr-brand" href="#home" aria-label="CafeRacer home">
            <img src={logo} alt="" />
            <span>CafeRacer</span>
          </a>

          <Navbar onHomeClick={replayHero} />

          <div className="cr-actions">
            <a className="cr-signin" href="#sign-in">
              Sign In
            </a>

            {/* <a className="cr-bag" href="#cart" aria-label="Shopping bag">
              <Icon name="bag" />
            </a> */}

            <MobileMenu onHomeClick={replayHero} />
          </div>
        </div>

        <div key={heroVersion} className="cr-hero">
          <span className="cr-spark" aria-hidden="true">
            ✦
          </span>
          {/* <span className="cr-seal" aria-hidden="true">
            <small>100%</small>
            <em>Original</em>
          </span> */}

          <p className="cr-tagline" aria-label={tagline}>
            {Array.from(tagline, (letter, index) => (
              <span
                key={index}
                className="cr-title-letter"
                aria-hidden="true"
                style={{
                  "--letter-delay": `${100 + (tagline.length - 1 - index) * 35}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </p>
          
          <h1 className="cr-title" aria-label="SLOW BREWED">
            {Array.from("SLOW BREWED", (letter, index) => (
              <span
                key={index}
                className={
                  letter === " " ? "cr-title-space" : "cr-title-letter"
                }
                aria-hidden="true"
                style={{
                  "--letter-delay": `${180 + ("SLOW BREWED".length - 1 - index) * 100}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <img
            className="cr-drink"
            src={icedEspresso}
            alt="A chilled glass of iced espresso with cream swirling around the ice"
            fetchPriority="high"
          />

          <div className="cr-story">

            <span className="cr-spark cr-spark-curve" aria-hidden="true">✦</span>

            
            <svg
              className="cr-story-shape"
              viewBox="0 0 600 400"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 0
         C160 12 260 76 342 216
         C415 340 476 384 600 396
         L600 400 H0 Z"
                fill="#e94113"
              />
            </svg>

            <p className="cr-description">
              <span className="cr-copy-desktop">
                Cold brew is coffee in its rawest form—steeped slow, brewed
                cold, and packed with bold flavor. No heat, no bitterness, just
                smooth, high-caffeine energy that lasts. Whether you need a
                morning boost or fuel for late nights, this is coffee without
                compromise.
              </span>
              <span className="cr-copy-mobile">
                Steeped cold for 16 hours. Bold flavor, a smooth finish, and a
                little extra caffeine.
              </span>
            </p>

            <a className="cr-buy" href="#products">
              See Menu
            </a>
          </div>

          <ul className="cr-features" aria-label="Cold brew features">
            {features.map((feature) => (
              <li key={feature.icon}>
                <span className="cr-feature-icon">
                  <Icon name={feature.icon} />
                </span>
                {feature.text}
              </li>
            ))}
          </ul>

          {/* <p className="cr-price"><small>Price</small> $14.99</p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
