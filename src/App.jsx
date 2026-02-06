import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <>
      {!showProductList ? (
        <div className="landing-page">
          <div className="overlay">
            <h1>Paradise Nursery</h1>
            <button
              className="get-started-btn"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
