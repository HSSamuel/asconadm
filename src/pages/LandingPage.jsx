import React from "react";
import { Link } from "react-router-dom";
import { Users, MessageCircle, TrendingUp, Apple, Play } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-white">
        <div className="flex items-center gap-3">
          {/* Ensure your logo image is in the public folder */}
          <img
            src="/logo.png"
            alt="ASCON Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            ASCON Alumni
          </span>
        </div>
        <Link
          to="/login"
          className="px-5 py-2 border border-slate-200 text-teal-800 font-semibold text-sm rounded-full hover:bg-slate-50 transition-colors"
        >
          Web Login
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-4 pb-16 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* IMAGE: Order 1 on Mobile, Order 2 on Desktop */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center relative">
            {/* Add a subtle radial gradient behind the phone to match the screenshot vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
            {/* Replace with your actual phone mockup image */}
            <img
              src="/phone-mockup.png"
              alt="App Preview"
              className="w-full max-w-[260px] sm:max-w-xs relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* TEXT: Order 2 on Mobile, Order 1 on Desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15]">
              Your ASCON <br />
              Network, <br />
              <span className="text-teal-700">Anywhere.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Connect with fellow graduates, find mentorship opportunities, and
              stay updated with the latest from the Administrative Staff College
              of Nigeria.
            </p>

            {/* App Store Buttons - Stacked on Mobile, Row on Desktop */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full max-w-[280px] sm:max-w-md mx-auto lg:mx-0">
              {/* Google Play Button */}
              <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-300 font-medium tracking-wide">
                    GET IT ON
                  </div>
                  <div className="text-sm font-semibold leading-tight mt-0.5">
                    Google Play
                  </div>
                </div>
              </button>

              {/* App Store Button */}
              <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto">
                <Apple className="w-7 h-7 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-300 font-medium tracking-wide">
                    DOWNLOAD ON THE
                  </div>
                  <div className="text-sm font-semibold leading-tight mt-0.5">
                    App Store
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12 max-w-xs sm:max-w-md mx-auto leading-tight">
            Everything you need to stay connected
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Global Directory
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[250px]">
                Find and connect with alumni by class year, location, or
                industry.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Real-time Chat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[250px]">
                Secure messaging and VoIP calls directly within the platform.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Mentorship
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[250px]">
                Request guidance or offer your expertise to recent graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] py-16 text-center flex flex-col items-center px-6">
        <img
          src="/logo.png"
          alt="ASCON Logo"
          className="w-12 h-12 mb-4 opacity-90 object-contain"
        />
        <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
          ASCON Alumni
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mb-8">
          © 2026 Administrative Staff College of Nigeria.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-300 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
