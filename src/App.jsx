import { useState } from "react";
import "./App.css";

import BridalCollection from "./BridalCollection";
import NecklaceCollection from "./NecklaceCollection";
import EarringsCollection from "./EarringsCollection";
import TraditionalCollection from "./TraditionalCollection";

const WHATSAPP_NUMBER = "919000012345";

const collections = [
  {
    name: "Bridal Collection",
    category: "Bridal Jewellery",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    type: "bridal",
  },
  {
    name: "Necklace Collection",
    category: "Necklace Sets",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=85",
    type: "necklace",
  },
  {
    name: "Earrings Collection",
    category: "Elegant Earrings",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=85",
    type: "earrings",
  },
  {
    name: "Traditional Collection",
    category: "Traditional Jewellery",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1000&q=85",
    type: "traditional",
  },
];

function App() {
  const [activeCollection, setActiveCollection] = useState(null);

  if (activeCollection === "bridal") {
    return (
      <BridalCollection
        onBack={() => setActiveCollection(null)}
      />
    );
  }

  if (activeCollection === "necklace") {
    return (
      <NecklaceCollection
        onBack={() => setActiveCollection(null)}
      />
    );
  }

  if (activeCollection === "earrings") {
    return (
      <EarringsCollection
        onBack={() => setActiveCollection(null)}
      />
    );
  }

  if (activeCollection === "traditional") {
    return (
      <TraditionalCollection
        onBack={() => setActiveCollection(null)}
      />
    );
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>ICONIC</span>
          <small>JEWELLERY</small>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          Enquire Now
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">
            LUXURY • ELEGANCE • BEAUTY
          </p>

          <h1>
            Jewellery That
            <br />
            <span>Completes Your Look</span>
          </h1>

          <p className="hero-text">
            Discover exquisite jewellery collections available on rent
            for weddings, engagements, receptions and every special
            occasion.
          </p>

          <div className="hero-buttons">
            <a href="#collections" className="gold-button">
              Explore Collection
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <p className="section-label">
          THE ICONIC EXPERIENCE
        </p>

        <h2>
          Make Every Moment
          <br />
          <span>Unforgettable.</span>
        </h2>

        <p>
          From timeless bridal sets to statement pieces, Iconic
          Jewellery brings you premium designs without the premium
          price tag. Choose your favourite piece, wear it with
          confidence and create memories that last forever.
        </p>
      </section>

      {/* COLLECTIONS */}
      <section className="collections" id="collections">

        <div className="section-heading">
          <div>
            <p className="section-label">
              OUR COLLECTION
            </p>

            <h2>
              Explore Jewellery
            </h2>
          </div>

          <p className="heading-description">
            Choose your favourite collection and discover
            beautiful jewellery available on rent.
          </p>
        </div>

        <div className="jewellery-grid">

          {collections.map((item) => (
            <article
              className="jewellery-card"
              key={item.type}
              onClick={() =>
                setActiveCollection(item.type)
              }
            >

              <div className="image-wrapper">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <span className="category">
                  {item.category}
                </span>

                <div className="collection-overlay">
                  <span>
                    View Collection →
                  </span>
                </div>

              </div>

              <div className="card-content">

                <h3>
                  {item.name}
                </h3>

                <div className="card-bottom">

                  <span>
                    Premium Rental
                  </span>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveCollection(item.type);
                    }}
                  >
                    Explore →
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="categories">

        <button
          className="category-box"
          onClick={() =>
            setActiveCollection("bridal")
          }
        >
          <span>01</span>
          <h3>Bridal Jewellery</h3>
          <p>
            Complete your bridal look with timeless elegance.
          </p>
          <strong>Explore →</strong>
        </button>

        <button
          className="category-box"
          onClick={() =>
            setActiveCollection("necklace")
          }
        >
          <span>02</span>
          <h3>Necklace Sets</h3>
          <p>
            Elegant designs for weddings and special occasions.
          </p>
          <strong>Explore →</strong>
        </button>

        <button
          className="category-box"
          onClick={() =>
            setActiveCollection("earrings")
          }
        >
          <span>03</span>
          <h3>Earrings</h3>
          <p>
            Statement pieces that make every look unforgettable.
          </p>
          <strong>Explore →</strong>
        </button>

        <button
          className="category-box"
          onClick={() =>
            setActiveCollection("traditional")
          }
        >
          <span>04</span>
          <h3>Traditional Collection</h3>
          <p>
            Beautiful traditional jewellery with a modern touch.
          </p>
          <strong>Explore →</strong>
        </button>

      </section>

      {/* HOW IT WORKS */}
      <section
        className="how-it-works"
        id="how-it-works"
      >

        <div className="section-heading centered">

          <p className="section-label">
            SIMPLE & EASY
          </p>

          <h2>
            How It Works
          </h2>

        </div>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Choose</h3>
            <p>
              Browse our collection and select
              your favourite jewellery.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Enquire</h3>
            <p>
              Send us your event date and
              jewellery requirements.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Book</h3>
            <p>
              Confirm your booking and secure
              your jewellery.
            </p>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Shine</h3>
            <p>
              Wear your favourite jewellery and
              make your moment iconic.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85"
            alt="Luxury jewellery"
          />
        </div>

        <div className="about-content">

          <p className="section-label">
            ABOUT ICONIC
          </p>

          <h2>
            Luxury Within
            <br />
            <span>Your Reach.</span>
          </h2>

          <p>
            At Iconic Jewellery, we believe everyone
            deserves to feel extraordinary on their
            special day. Our rental collection brings
            together elegant, stylish and timeless
            jewellery pieces for every occasion.
          </p>

          <p>
            Whether it is your wedding, engagement,
            reception or festive celebration, find the
            perfect piece to complete your look.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            Get In Touch
          </a>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <p className="section-label">
          YOUR SPECIAL DAY DESERVES SOMETHING SPECIAL
        </p>

        <h2>
          Ready to Find Your
          <br />
          <span>Perfect Jewellery?</span>
        </h2>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="gold-button"
        >
          Start Your Enquiry
        </a>

      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

        <div>
          <p className="section-label">
            CONTACT US
          </p>

          <h2>
            Let's Make You
            <br />
            Look Iconic.
          </h2>
        </div>

        <div className="contact-details">

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            +91 90000 12345
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/iconicjewelleryofficial/"
            target="_blank"
            rel="noreferrer"
          >
            @iconicjewelleryofficial
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="logo">
          <span>ICONIC</span>
          <small>JEWELLERY</small>
        </div>

        <p>
          Premium Jewellery on Rent
        </p>

        <p>
          © 2026 Iconic Jewellery. All Rights Reserved.
        </p>

      </footer>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>

    </div>
  );
}

export default App;