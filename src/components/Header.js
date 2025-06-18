import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const createFloatingHeart = () => {
      const heart = document.createElement("div");
      heart.innerHTML = "💕";
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 2 + "s";
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";

      const container = document.querySelector(".floating-hearts");
      if (container) {
        container.appendChild(heart);
        setTimeout(() => {
          if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
          }
        }, 7000);
      }
    };

    const interval = setInterval(createFloatingHeart, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="floating-hearts"></div>
      <header className="relative bg-gradient-to-r from-pink-100 to-rose-100 shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="dancing-script text-5xl md:text-6xl font-bold text-pink-600 mb-4 sparkle">
              Virtual Baby Shower
            </h1>
            <p className="text-2xl text-pink-500 font-medium">
              Celebrating Our Little Princess 👑
            </p>
            <div className="mt-6 flex justify-center space-x-8">
              <span className="text-6xl animate-bounce">🎀</span>
              <span className="text-6xl animate-pulse">👶</span>
              <span className="text-6xl animate-bounce">🌸</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
