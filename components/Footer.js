function Footer() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <div data-name="footer" data-file="components/Footer.js">
        <footer className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
              <h3 className="dancing-script text-3xl font-bold mb-4">
                Thank You for Celebrating With Us! 💖
              </h3>
              <p className="text-pink-100 text-lg mb-6">
                Your love and support mean everything as we welcome our baby
                girl
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="inline-block bg-white/20 p-3 rounded-full mb-4">
                  <i data-lucide="calendar" className="w-6 h-6"></i>
                </div>
                <h4 className="font-semibold mb-2">Virtual Shower Date</h4>
                <p className="text-pink-100">July 13, 2025 at 4:00 PM</p>
              </div>
              <div>
                <div className="inline-block bg-white/20 p-3 rounded-full mb-4">
                  <i data-lucide="baby" className="w-6 h-6"></i>
                </div>
                <h4 className="font-semibold mb-2">Due Date</h4>
                <p className="text-pink-100">Week of August 24, 2025</p>
              </div>
              <div>
                <div className="inline-block bg-white/20 p-3 rounded-full mb-4">
                  <i data-lucide="heart" className="w-6 h-6"></i>
                </div>
                <h4 className="font-semibold mb-2">With Love</h4>
                <p className="text-pink-100">The Expecting Family</p>
              </div>
            </div>

            <div className="border-t border-pink-400 pt-8">
              <div className="flex justify-center space-x-4 mb-4">
                <span className="text-2xl animate-pulse">💕</span>
                <span className="text-2xl animate-bounce">👶</span>
                <span className="text-2xl animate-pulse">🌸</span>
                <span className="text-2xl animate-bounce">🎀</span>
                <span className="text-2xl animate-pulse">✨</span>
              </div>
              <p className="text-pink-200">
                © 2024 Virtual Baby Shower • Made with love for our little
                princess
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    reportError(error);
  }
}
