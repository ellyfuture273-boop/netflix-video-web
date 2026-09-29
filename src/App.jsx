const heroMovie = {
  title: 'The Last Horizon',
  year: '2026',
  rating: '18+',
  duration: '2h 15m',
  description:
    'A fearless explorer races across a fractured world to uncover the secret behind a vanished civilization and the power that could change humanity forever.',
  genres: ['Sci-Fi', 'Adventure', 'Drama'],
};

const rows = [
  {
    title: 'Trending Now',
    items: [
      { title: 'Midnight Echo', accent: 'red' },
      { title: 'City of Steel', accent: 'blue' },
      { title: 'Shadow Run', accent: 'purple' },
      { title: 'Silent Tide', accent: 'green' },
      { title: 'Crimson Code', accent: 'amber' },
      { title: 'Atlas', accent: 'cyan' },
    ],
  },
  {
    title: 'Action',
    items: [
      { title: 'Iron Reign', accent: 'slate' },
      { title: 'Night Signal', accent: 'orange' },
      { title: 'Storm Breaker', accent: 'pink' },
      { title: 'Deep Impact', accent: 'green' },
      { title: 'Zero Line', accent: 'violet' },
      { title: 'Afterglow', accent: 'yellow' },
    ],
  },
];

const accentMap = {
  red: 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)',
  blue: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
  purple: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
  green: 'linear-gradient(135deg, #047857 0%, #14532d 100%)',
  amber: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
  cyan: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
  slate: 'linear-gradient(135deg, #475569 0%, #0f172a 100%)',
  orange: 'linear-gradient(135deg, #f97316 0%, #9a4d16 100%)',
  pink: 'linear-gradient(135deg, #ec4899 0%, #831843 100%)',
  violet: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)',
  yellow: 'linear-gradient(135deg, #facc15 0%, #a16207 100%)',
};

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand">NETFLIX</div>
          <nav className="nav hidden-mobile">
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New &amp; Popular</span>
            <span>My List</span>
          </nav>
        </div>

        <div className="top-actions">
          <button className="icon-btn" aria-label="Search">⌕</button>
          <button className="icon-btn" aria-label="Notifications">🔔</button>
          <div className="profile-pill">
            <div className="profile-avatar" />
            <span>Profile</span>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay" />
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          <div className="hero-content">
            <div className="meta-row">
              <span className="badge">Netflix Original</span>
              <span>{heroMovie.year}</span>
              <span>{heroMovie.rating}</span>
              <span>{heroMovie.duration}</span>
            </div>

            <h1>{heroMovie.title}</h1>

            <div className="genre-row">
              {heroMovie.genres.map((genre) => (
                <span key={genre} className="genre-pill">
                  {genre}
                </span>
              ))}
            </div>

            <p>{heroMovie.description}</p>

            <div className="cta-row">
              <button className="primary-btn">▶ Play</button>
              <button className="secondary-btn">＋ My List</button>
              <button className="secondary-btn">👍 Like</button>
            </div>
          </div>
        </section>

        <div className="content-area">
          {rows.map((row) => (
            <section key={row.title} className="row-section">
              <div className="row-header">
                <h2>{row.title}</h2>
                <button className="explore-btn">Explore All →</button>
              </div>

              <div className="card-row">
                {row.items.map((item) => (
                  <div
                    key={item.title}
                    className="movie-card"
                    style={{ background: accentMap[item.accent] }}
                  >
                    <div className="card-fade" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <div className="audio-pill">🔊 Audio: On</div>
    </div>
  );
}

export default App;
