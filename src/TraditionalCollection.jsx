import "./TraditionalCollection.css";

const WHATSAPP_NUMBER = "919000012345";

const products = [
  {
    name: "Maharashtrian Nath",
    category: "Nath",
    price: "₹399 / Day",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Traditional Thushi",
    category: "Thushi",
    price: "₹799 / Day",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Temple Jewellery Set",
    category: "Temple",
    price: "₹1,399 / Day",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Traditional Kolhapuri Saaj",
    category: "Kolhapuri Saaj",
    price: "₹1,199 / Day",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Antique Gold Set",
    category: "Antique",
    price: "₹1,499 / Day",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Traditional Bangles",
    category: "Bangles",
    price: "₹599 / Day",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bridal Borla",
    category: "Borla",
    price: "₹499 / Day",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Traditional Set",
    category: "Traditional",
    price: "₹1,299 / Day",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
  },
];

function TraditionalCollection({ onBack }) {
  return (
    <div className="traditional-page">
      <header className="traditional-header">
        <button onClick={onBack}>← Back</button>

        <div className="traditional-logo">
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

      <section className="traditional-hero">
        <p>ICONIC JEWELLERY</p>
        <h1>
          Traditional <span>Collection</span>
        </h1>
        <div></div>
        <p>
          Timeless traditional jewellery with an elegant touch for every
          celebration.
        </p>
      </section>

      <section className="traditional-products">
        <div className="traditional-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Timeless Traditions</h2>
          </div>
          <span>{products.length} Products</span>
        </div>

        <div className="traditional-grid">
          {products.map((product) => (
            <article className="traditional-card" key={product.name}>
              <div className="traditional-image">
                <img src={product.image} alt={product.name} />
                <span>{product.category}</span>
              </div>

              <div className="traditional-info">
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

export default TraditionalCollection;

