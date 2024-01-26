import { sampleProducts } from "./data";

function App() {
  return (
    <>
      <div className="d-flex flex-column h-full"></div>
      <header>Express-Cart</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </>
  );
}

export default App;
