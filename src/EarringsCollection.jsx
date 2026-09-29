import "./EarringsCollection.css";

const WHATSAPP_NUMBER = "919000012345";

const products = [
  {
    name: "Royal Jhumka",
    category: "Jhumka",
    price: "₹499 / Day",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bridal Jhumki",
    category: "Bridal",
    price: "₹599 / Day",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kundan Earrings",
    category: "Kundan",
    price: "₹699 / Day",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Statement Earrings",
    category: "Statement",
    price: "₹549 / Day",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pearl Drop Earrings",
    category: "Pearl",
    price: "₹499 / Day",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Temple Earrings",
    category: "Temple",
    price: "₹649 / Day",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Long Bridal Earrings",
    category: "Bridal",
    price: "₹749 / Day",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Antique Earrings",
    category: "Antique",
    price: "₹599 / Day",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
  },
];

function EarringsCollection({ onBack }) {
  return (
    <div className="earrings-page">
      <header className="earrings-header">
        <button onClick={onBack}>← Back</button>

        <div className="earrings-logo">
          <span>ICONIC</span>
          <small>JEWELLERY</small>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <section className="earrings-hero">
        <p>ICONIC JEWELLERY</p>
        <h1>
          Earrings <span>Collection</span>
        </h1>
        <div></div>
        <p>Elegant earrings designed to add the perfect finishing touch.</p>
      </section>

      <section className="earrings-products">
        <div className="earrings-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Elegant Earrings</h2>
          </div>
          <span>{products.length} Products</span>
        </div>

        <div className="earrings-grid">
          {products.map((product) => (
            <article className="earrings-card" key={product.name}>
              <div className="earrings-image">
                <img src={product.image} alt={product.name} />
                <span>{product.category}</span>
              </div>

              <div className="earrings-info">
                <h3>{product.name}</h3>

                <div>
                  <strong>{product.price}</strong>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello Iconic Jewellery, I am interested in ${product.name}.`
                    )}`}
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
    </div>
  );
}

export default EarringsCollection;

