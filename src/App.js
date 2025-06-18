import React from "react";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import WishlistSection from "./components/WishlistSection";
import WishesSection from "./components/WishesSection";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <WelcomeSection />
      <WishlistSection />
      <WishesSection />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;
