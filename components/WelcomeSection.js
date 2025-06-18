function WelcomeSection() {
  try {
    const [timeLeft, setTimeLeft] = React.useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    React.useEffect(() => {
      const targetDate = new Date("2025-07-13T16:00:00"); // July 13, 2025 at 4 PM

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance > 0) {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div data-name="welcome-section" data-file="components/WelcomeSection.js">
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 fade-in">
              <div className="text-center mb-12">
                <h2 className="dancing-script text-4xl md:text-5xl font-bold text-pink-600 mb-6">
                  Welcome to Our Celebration! 🎉
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We're so excited to share this special moment with you! Join
                  us virtually as we celebrate the upcoming arrival of our
                  precious baby girl. Your love and support mean the world to
                  us! 💖
                </p>

                <div className="bg-pink-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-pink-600 mb-3">
                    📅 Important Dates
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Virtual Baby Shower:</span>{" "}
                      July 13, 2025 at 4:00 PM
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Baby Girl's Due Date:</span>{" "}
                      Week of August 24, 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm text-pink-500">Days</div>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm text-pink-500">Hours</div>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm text-pink-500">Minutes</div>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm text-pink-500">Seconds</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-pink-600 font-medium text-lg">
                  Until our virtual baby shower begins! ✨
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("WelcomeSection component error:", error);
    reportError(error);
  }
}
