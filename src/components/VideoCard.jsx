function VideoCard({ video, setSelectedVideo }) {
  return (
    <div
      className="video-card"
      onClick={() => setSelectedVideo(video)}
    >
      <div className="thumbnail-container">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="thumbnail"
        />

        <div className="play-overlay">
          ▶
        </div>

        <span className="category-badge">
          {video.category}
        </span>
      </div>

      <div className="video-info">
        <h3>{video.title}</h3>

        <p className="video-description">
          {video.description}
        </p>

        <div className="video-meta">
          <span>👁 {video.views}</span>
          <span>❤️ {video.likes}</span>
        </div>

        <div className="video-date">
          📅 {video.date}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;