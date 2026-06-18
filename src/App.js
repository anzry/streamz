import { useEffect, useState } from "react";
import "./App.css";

import videos from "./data/videos";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import VideoCard from "./components/VideoCard";
import VideoModal from "./components/VideoModal";
import Hero from "./components/Hero";

function App() {
  const [search, setSearch] = useState("");

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  const [darkMode, setDarkMode] =
    useState(() => {
      const savedTheme =
        localStorage.getItem("theme");

      return savedTheme
        ? JSON.parse(savedTheme)
        : true;
    });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const filteredVideos = videos.filter(
    (video) =>
      video.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      video.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >
      <Sidebar />

      <div className="main-content">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Hero />

        <div className="stats-row">
          <div className="stat-card">
            <h3>10K+</h3>
            <p>Videos Available</p>
          </div>
          
          <div className="stat-card">
            <h3>500K+</h3>
            <p>Active Users</p>
          </div>

         <div className="stat-card">
          <h3>100+</h3>
          <p>Categories</p>
         </div>
        </div>

        <section className="section-header">
          <h2>🔥 Trending Videos</h2>

          <p>
            Discover what's trending today
          </p>
        </section>

        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                setSelectedVideo={
                  setSelectedVideo
                }
              />
            ))
          ) : (
            <div className="no-results">
              <h2>No Videos Found</h2>

              <p>
                Try another search term.
              </p>
            </div>
          )}
        </div>

        <section className="featured-banner">
          <div className="featured-content">
            
            <span>⭐ FEATURED TODAY</span>
            
            <h2>The Rise of Artificial Intelligence</h2>
            
            <p>
              Explore the future of AI, machine learning,
              automation and innovation.
            </p>
              
            <button>
              ▶ Watch Featured
            </button>
          </div>
        </section>

       <footer className="footer">
        © 2026 Streamz • Built with React
       </footer>
      
      </div>

      <VideoModal
        video={selectedVideo}
        close={() =>
          setSelectedVideo(null)
        }
      />
    </div>
  );
}

export default App;