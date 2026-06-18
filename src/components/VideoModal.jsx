function VideoModal({ video, close }) {
  if (!video) return null;

  return (
    <div
      className="modal-overlay"
      onClick={close}
    >
      <div
        className="modal-content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          className="close-btn"
          onClick={close}
        >
          ✖
        </button>

        <img
          src={video.thumbnail}
          alt={video.title}
          className="modal-image"
        />

        <div className="modal-body">
          <span className="modal-category">
            {video.category}
          </span>

          <h2>{video.title}</h2>

          <p className="modal-description">
            {video.description}
          </p>

          <div className="modal-stats">
            <div>
              👁 <strong>{video.views}</strong>
            </div>

            <div>
              ❤️ <strong>{video.likes}</strong>
            </div>

            <div>
              📅 <strong>{video.date}</strong>
            </div>
          </div>

          <div className="modal-buttons">
            <button className="watch-btn">
              ▶ Watch Now
            </button>

            <button className="save-btn">
              ⭐ Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;