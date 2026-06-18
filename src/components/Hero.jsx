function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <span className="hero-badge">🔥 Trending Now</span>

        <h1>Welcome to Streamz</h1>

        <p>
          Discover trending videos, blockbuster content, educational
          masterpieces, gaming highlights, music hits, and more — all in one
          place.
        </p>

        <div className="hero-buttons">
          <button className="watch-btn">▶ Watch Now</button>
          <button className="info-btn">
             ℹ More Info
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <span>Videos</span>
          </div>

          <div>
            <h3>500K+</h3>
            <span>Users</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Categories</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;