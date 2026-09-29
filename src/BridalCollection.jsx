import "./BridalCollection.css";

const WHATSAPP_NUMBER = "919000012345";

const bridalProducts = [
  {
    name: "1 Gram Gold Bridal Set",
    price: "₹1,799 / Day",
    category: "1 Gram Gold",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "1 Gram Gold Kundan Set",
    price: "₹1,999 / Day",
    category: "Kundan",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Jadau Bridal Choker",
    price: "₹1,499 / Day",
    category: "Jadau Choker",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Royal Rani Haar",
    price: "₹1,999 / Day",
    category: "Rani Haar",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bridal Long Haram",
    price: "₹1,899 / Day",
    category: "Long Necklace",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kundan Jhumka Set",
    price: "₹699 / Day",
    category: "Jhumka",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Temple Gold Bridal Set",
    price: "₹1,699 / Day",
    category: "Temple Jewellery",
    image:
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Complete Bridal Combo",
    price: "₹2,499 / Day",
    category: "Complete Set",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  },
];

function BridalCollection({ onBack }) {
  const enquiryMessage = (product) => {
    const message = `Hello, I am interested in renting the ${product.name}. Please share availability and booking details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="collection-page">

      {/* HEADER */}
      <header className="collection-header">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="collection-logo">
          <span>ICONIC</span>
          <small>JEWELLERY</small>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="collection-whatsapp"
        >
          WhatsApp
        </a>

      </header>

      {/* HERO */}
      <section className="collection-hero">

        <div className="collection-hero-overlay"></div>

        <div className="collection-hero-content">

          <p>ICONIC JEWELLERY • BRIDAL EDIT</p>

          <h1>
            Bridal
            <span>Collection</span>
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            Discover elegant 1 Gram Gold, Kundan, Jadau,
            Temple and statement bridal jewellery available
            for rent.
          </p>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="products-section">

        <div className="products-heading">

          <div>
            <p className="small-label">
              OUR BRIDAL EDIT
            </p>

            <h2>
              Made For Your
              <span> Big Day</span>
            </h2>
          </div>

          <p>
            Choose your favourite design and enquire
            directly on WhatsApp for availability,
            rental details and booking.
          </p>

        </div>

        <div className="products-grid">

          {bridalProducts.map((product, index) => (

            <article
              className="product-card"
              key={product.name}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-number">
                  0{index + 1}
                </span>

                <span className="product-category">
                  {product.category}
                </span>

              </div>

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <div className="product-bottom">

                  <strong>
                    {product.price}
                  </strong>

                  <a
                    href={enquiryMessage(product)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire →
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ENQUIRY CTA */}
      <section className="collection-cta">

        <p>
          FIND YOUR PERFECT BRIDAL LOOK
        </p>

        <h2>
          Your Wedding.
          <br />
          <span>Your Jewellery.</span>
        </h2>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hello, I want to enquire about bridal jewellery on rent."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          Start Enquiry
        </a>

      </section>

      {/* FOOTER */}
      <footer className="collection-footer">

        <div className="collection-logo">
          <span>ICONIC</span>
          <small>JEWELLERY</small>
        </div>

        <p>
          Premium Jewellery on Rent
        </p>

        <button
          type="button"
          onClick={onBack}
        >
          Back to Home
        </button>

      </footer>

    </div>
  );
}

export default BridalCollection;