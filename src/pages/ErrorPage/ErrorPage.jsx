// import React from "react";

// const ErrorPage = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">
//       {/* Stars Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a2a40,_#000)]">
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-4xl w-full text-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10">
//         {/* SVG Illustration */}
//         <div className="w-48 mx-auto mb-6 animate-float">
//           <img
//             src="https://assets9.lottiefiles.com/packages/lf20_tljjah3p.json"
//             alt="Astronaut"
//             className="w-full h-auto drop-shadow-lg"
//           />
//         </div>

//         {/* Headings */}
//         <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 animate-bounce mb-2">
//           404
//         </h1>
//         <h2 className="text-3xl font-semibold text-white mb-4">
//           You’ve ventured too far.
//         </h2>
//         <p className="text-white/70 max-w-md mx-auto mb-6">
//           The page you’re looking for is lost in the void. Maybe it never existed, or maybe it slipped into a black hole.
//         </p>

//         {/* Button */}
//         <a
//           href="/"
//           className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//         >
//           🔭 Navigate Back to Earth
//         </a>
//       </div>

//       {/* Glow Effect */}
//       <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-ping"></div>
//     </div>
//   );
// };

// export default ErrorPage;

// -----------------
import React, { useEffect } from "react";
import "../ErrorPage/ErrorPage"; // auto-executes background animation

const ErrorPage = () => {
  useEffect(() => {
    const animateLuxuryBackground = window?.luxuryBackgroundAnimation;
    if (animateLuxuryBackground) animateLuxuryBackground("luxury-bg");
  }, []);

  return (
    <div
      id="luxury-bg"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white bg-[length:300%_300%] overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>

      {/* Luxury glass panel */}
      <div className="relative z-10 max-w-4xl w-full p-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_25px_80px_rgba(255,255,255,0.05)] animate-fade-in">
        <div className="w-44 mx-auto mb-6 animate-float">
          <iframe
            src="https://lottie.host/embed/1b4d1bd1-1c14-4c95-ae35-e88fe9b19e77/lD65ptmldX.json"
            className="w-full h-[200px] border-none"
            title="Astronaut Animation"
          ></iframe>
        </div>

        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 animate-text-shine">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white/90 mt-4">Lost in Luxury</h2>
        <p className="text-white/60 mt-3 mb-6 max-w-xl mx-auto text-lg">
          This page doesn’t exist. But we’ll guide you home in style.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          🧭 Return Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
