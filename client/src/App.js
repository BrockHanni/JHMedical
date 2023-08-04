import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Signin from './components/Signin.js';
import Review from './components/Review.js';
import Footer from './components/Footer.js';

// import home from './components/Home.js';
// import products from './components/Products.js';
// import review from './components/Review.js';
// import signin from './components/Signin.js';

function App() {
  return (
    <main className=''>
      <Header />
      <Router>
        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Products" element={<Products />} />

        <Route path="/Review" element={<Review />} />

        <Route path="/Signin" element={<Signin />} />

        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
