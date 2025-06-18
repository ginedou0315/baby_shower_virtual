function WishesSection() {
  try {
    const [wishes, setWishes] = React.useState([]);
    const [newWish, setNewWish] = React.useState("");
    const [guestName, setGuestName] = React.useState("");

    React.useEffect(() => {
      lucide.createIcons();
      loadWishes();
    }, []);

    const loadWishes = async () => {
      try {
        if (typeof trickleListObjects !== "undefined") {
          const response = await trickleListObjects("baby-wish", 50, true);
          setWishes(response.items || []);
        }
      } catch (error) {
        console.error("Failed to load wishes:", error);
      }
    };

    const handleSubmitWish = async (e) => {
      e.preventDefault();
      if (!newWish.trim() || !guestName.trim()) return;

      try {
        const wishData = {
          message: newWish.trim(),
          guestName: guestName.trim(),
          timestamp: new Date().toISOString(),
        };

        if (typeof trickleCreateObject !== "undefined") {
          await trickleCreateObject("baby-wish", wishData);
          setNewWish("");
          setGuestName("");
          loadWishes();
        } else {
          // Demo mode
          const newWishItem = {
            objectId: Date.now().toString(),
            objectData: wishData,
          };
          setWishes((prev) => [newWishItem, ...prev]);
          setNewWish("");
          setGuestName("");
        }
      } catch (error) {
        console.error("Failed to save wish:", error);
        alert("Failed to save your wish. Please try again.");
      }
    };

    return (
      <div data-name="wishes-section" data-file="components/WishesSection.js">
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="dancing-script text-4xl md:text-5xl font-bold text-pink-600 mb-6">
                Wishes for Baby Girl 💌
              </h2>
              <p className="text-lg text-gray-700">
                Share your love, advice, and warm wishes for our little
                princess!
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
              <form onSubmit={handleSubmitWish} className="mb-8">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Your name"
                    className="px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required
                  />
                </div>
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
                  className="w-full md:w-auto px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
                >
                  <i data-lucide="heart" className="w-4 h-4"></i>
                  Send Wishes
                </button>
              </form>

              <div className="space-y-4">
                {wishes.map((wish) => (
                  <div
                    key={wish.objectId}
                    className="bg-pink-50 p-6 rounded-xl"
                  >
                    <p className="text-gray-700 mb-3 italic">
                      "{wish.objectData.message}"
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-pink-600">
                        - {wish.objectData.guestName}
                      </span>
                      <span className="text-gray-500">
                        {new Date(
                          wish.objectData.timestamp
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                {wishes.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <i
                      data-lucide="message-circle"
                      className="w-12 h-12 mx-auto mb-4 text-pink-300"
                    ></i>
                    <p>Be the first to share your wishes!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("WishesSection component error:", error);
    reportError(error);
  }
}
