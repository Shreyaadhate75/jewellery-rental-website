import "./NecklaceCollection.css";

const WHATSAPP_NUMBER = "919000012345";

const products = [
  {
    name: "Royal Kundan Necklace",
    category: "Kundan",
    price: "₹1,299 / Day",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Elegant Pearl Necklace",
    category: "Pearl",
    price: "₹999 / Day",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Temple Necklace Set",
    category: "Temple",
    price: "₹1,499 / Day",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Statement Choker",
    category: "Choker",
    price: "₹1,199 / Day",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Gold Necklace",
    category: "Classic",
    price: "₹1,399 / Day",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bridal Layered Necklace",
    category: "Layered",
    price: "₹1,799 / Day",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Antique Necklace",
    category: "Antique",
    price: "₹1,099 / Day",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Royal Long Haar",
    category: "Long Haar",
    price: "₹1,899 / Day",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
  },
];

function NecklaceCollection({ onBack }) {
  return (
    <div className="necklace-page">
      <header className="necklace-header">
        <button onClick={onBack}>← Back</button>

        <div className="necklace-logo">
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

      <section className="necklace-hero">
        <p>ICONIC JEWELLERY</p>
        <h1>
          Necklace <span>Collection</span>
        </h1>
        <div></div>
        <p>Elegant necklaces for weddings, celebrations and special occasions.</p>
      </section>

      <section className="necklace-products">
        <div className="necklace-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Necklaces & Sets</h2>
          </div>
          <span>{products.length} Products</span>
        </div>

        <div className="necklace-grid">
          {products.map((product) => (
            <article className="necklace-card" key={product.name}>
              <div className="necklace-image">
                <img src={product.image} alt={product.name} />
                <span>{product.category}</span>
              </div>

              <div className="necklace-info">
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

export default NecklaceCollection;
