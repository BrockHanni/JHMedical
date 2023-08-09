import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Signin from './components/Signin.js';
import Review from './components/Review.js';
import Footer from './components/Footer.js';
import ProductsLogin from './components/ProductsLogin.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className=''>
        <Router>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/Products" element={<Products />} />

            <Route path="/ProductsLogin" element={<ProductsLogin />} />

            <Route path="/Review" element={<Review />} />

            <Route path="/Signin" element={<Signin />} />

          </Routes>
        </Router>
        <Footer />
      </main>
    </ApolloProvider>
  );
}

export default App;
