function Sidebar() {
  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "🔥", label: "Trending" },
    { icon: "🎬", label: "Movies" },
    { icon: "🎵", label: "Music" },
    { icon: "🎮", label: "Gaming" },
    { icon: "💻", label: "Technology" },
    { icon: "📚", label: "Education" },
    { icon: "🚀", label: "Science" },
    { icon: "✈️", label: "Travel" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        🎥 Streamz
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-icon">
              {item.icon}
            </span>

            <span className="menu-label">
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <p>Streamz Premium</p>
        <span>Unlimited Entertainment</span>
      </div>
    </aside>
  );
}

export default Sidebar;