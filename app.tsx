"use client"; // Required for Next.js 13+ App Router

export default function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo"></div>
        <nav>
          <a href="#">Store</a>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">AirPods</a>
          <a href="#">TV & Home</a>
          <a href="#">Entertainment</a>
          <a href="#">Accessories</a>
          <a href="#">Support</a>
        </nav>
        <div className="icons">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>iPhone 16 Pro</h1>
          <p>Built for Apple Intelligence.</p>
        </div>

        <div className="hero-image-container">
          <img src="/iphone16pro.jpeg" alt="iPhone 16 Pro" className="hero-image" />
        </div>

        <div className="buttons">
          <button className="learn-more">Learn more</button>
          <button className="buy">Buy</button>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          background: black;
          font-family: Arial, sans-serif;
        }

        .container {
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 40px;
          background: black;
          color: white;
          font-size: 0.85rem;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
        }

        .logo {
          font-size: 1.6rem;
        }

        nav {
          display: flex;
          gap: 20px;
        }

        nav a {
          text-decoration: none;
          color: white;
          font-weight: 400;
          font-size: 0.75rem;
        }

        .icons {
          display: flex;
          gap: 15px;
          font-size: 1.1rem;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          width: 100%;
          height: 130vh;
          padding-top: 220px;
          position: relative;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 15px;
        }

        .hero h1 {
          font-size: 3.4rem;
          font-weight: bold;
        }

        .hero p {
          font-size: 1.4rem;
          margin-top: 6px;
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 30px;
        }

        .hero-image {
          width: 820px;
          height: auto;
        }

        .buttons {
          display: flex;
          gap: 10px;
          margin-top: 30px;
        }

        .learn-more, .buy {
          padding: 12px 28px;
          font-size: 1.1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          font-weight: bold;
          border: none;
        }

        .learn-more {
          background: #007bff;
          color: white;
        }

        .learn-more:hover {
          background: #0056b3;
        }

        .buy {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .buy:hover {
          background: white;
          color: black;
        }
      `}</style>
    </div>
  );
}


