import React, { useState, useEffect } from "react";

function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState("");
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    try {
      // Try Trickle database first
      if (typeof window.trickleListObjects !== "undefined") {
        const response = await window.trickleListObjects("baby-wish", 50, true);
        setWishes(response.items || []);
      } else {
        // Fallback to localStorage for Netlify
        const savedWishes = localStorage.getItem("babyShowerWishes");
        if (savedWishes) {
          setWishes(JSON.parse(savedWishes));
        }
      }
    } catch (error) {
      console.error("Failed to load wishes:", error);
      // Try localStorage as backup
      const savedWishes = localStorage.getItem("babyShowerWishes");
      if (savedWishes) {
        setWishes(JSON.parse(savedWishes));
      }
    }
  };

  const saveToLocalStorage = (wishesArray) => {
    localStorage.setItem("babyShowerWishes", JSON.stringify(wishesArray));
  };

  const handleSubmitWish = async (e) => {
    e.preventDefault();
    if (!newWish.trim() || !guestName.trim()) return;

    const wishData = {
      message: newWish.trim(),
      guestName: guestName.trim(),
      timestamp: new Date().toISOString(),
    };

    const newWishItem = {
      objectId: Date.now().toString(),
      objectData: wishData,
    };

    // Add to local state immediately
    const updatedWishes = [newWishItem, ...wishes];
    setWishes(updatedWishes);
    setNewWish("");
    setGuestName("");

    // Save to localStorage for Netlify
    saveToLocalStorage(updatedWishes);

    // Try to save to Trickle database if available
    try {
      if (typeof window.trickleCreateObject !== "undefined") {
        await window.trickleCreateObject("baby-wish", wishData);
      }
    } catch (error) {
      console.error("Failed to save to database:", error);
    }
  };

  const handleDeleteWish = async (wishId) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Are you sure you want to delete this wish?")) return;

    // Remove from local state
    const updatedWishes = wishes.filter((wish) => wish.objectId !== wishId);
    setWishes(updatedWishes);

    // Update localStorage
    saveToLocalStorage(updatedWishes);

    // Try to delete from Trickle database if available
    try {
      if (typeof window.trickleDeleteObject !== "undefined") {
        await window.trickleDeleteObject("baby-wish", wishId);
      }
    } catch (error) {
      console.error("Failed to delete from database:", error);
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="dancing-script text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Wishes for Baby Girl 💌
          </h2>
          <p className="text-lg text-gray-700">
            Share your love, advice, and warm wishes for our little princess!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <form onSubmit={handleSubmitWish} className="mb-8">
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 mb-4 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Share your wishes, advice, or sweet message for our baby girl..."
              rows="4"
              className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              💕 Send Wishes
            </button>
          </form>

          <div className="space-y-4">
            {wishes.map((wish) => (
              <div
                key={wish.objectId}
                className="bg-pink-50 p-6 rounded-xl relative group"
              >
                <button
                  onClick={() => handleDeleteWish(wish.objectId)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Delete wish"
                >
                  🗑️
                </button>
                <p className="text-gray-700 mb-3 italic pr-8">
                  "{wish.objectData.message}"
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-pink-600">
                    - {wish.objectData.guestName}
                  </span>
                  <span className="text-gray-500">
                    {new Date(wish.objectData.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
            {wishes.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <span className="text-6xl mb-4 block text-pink-300">💬</span>
                <p>Be the first to share your wishes!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishesSection;
