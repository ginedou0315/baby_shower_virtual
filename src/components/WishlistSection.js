import React from "react";

function WishlistSection() {
  const registryUrl =
    "https://www.amazon.de/baby-reg/ginelle-doubek-august-2025-nussbaumen/3RJX9AUTSL22A";

  const handleRegistryClick = () => {
    window.open(registryUrl, "_blank");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="dancing-script text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Baby Girl Wishlist 🎁
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Help us prepare for our little princess! We've created a wishlist
            with items that would be perfect for our baby girl. Your generosity
            is truly appreciated! 💝
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-pink-100 p-4 rounded-full mb-4">
              <span className="text-4xl">🎁</span>
            </div>
            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Amazon Baby Registry
            </h3>
            <p className="text-gray-600 mb-6">
              Click the button below to view our complete baby registry on
              Amazon.de
            </p>

            <button
              onClick={handleRegistryClick}
              className="px-8 py-4 bg-pink-500 text-white text-lg rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-3 mx-auto mb-6 shadow-lg"
            >
              <span>🔗</span>
              View Our Baby Registry
            </button>

            <p className="text-sm text-gray-500 mb-4">
              Registry Name: Ginelle Doubek - August 2025
            </p>

            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 break-all">{registryUrl}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <span className="text-3xl mb-2 block">👕</span>
              <h4 className="font-semibold text-pink-600">Clothing</h4>
              <p className="text-sm text-gray-600">
                Cute outfits for our little one
              </p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <span className="text-3xl mb-2 block">🧸</span>
              <h4 className="font-semibold text-pink-600">Toys & Books</h4>
              <p className="text-sm text-gray-600">Educational and fun items</p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <span className="text-3xl mb-2 block">🍼</span>
              <h4 className="font-semibold text-pink-600">Baby Essentials</h4>
              <p className="text-sm text-gray-600">Everything baby needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishlistSection;
