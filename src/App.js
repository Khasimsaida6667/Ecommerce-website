import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import Footer from './Footer';
import { ThreeDots } from 'react-loader-spinner'; // Importing the ThreeDots loader
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false); // Set loading to false when products are fetched successfully
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Helmet>
        <title>My E-commerce Site</title>
        <meta name="description" content="Discover our amazing products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="app">
        <Header />
        <div className="hero-section">
          <div className="hero-content">
            <h1>Discover our products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="main-content">
          {showFilter && <Sidebar />}
          <div className="product-section">
            <div className="filter-toggle">
              <div>
                <span>{products.length} Items</span>
                <button onClick={toggleFilter} className="filter-btn">
                  {showFilter ? 'Hide Filter' : 'Show Filter'}
                </button>
              </div>
              <div className="recommendations-dropdown">
                <select>
                  <option value="">Recommendations</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            {loading ? (
              <div className="products-loader-container">
                <ThreeDots color="#0b69ff" height={50} width={50} />
              </div>
            ) : (
              <ProductList products={products} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
