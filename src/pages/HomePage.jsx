import "./HomePage.css"; 


export default function HomePage() {
  return (
    <div className="home">
      

      {/* Top card */}
      <section className="card hero-card">
        <div className="hero-content">
          <img
            src="images/hus.png" 
            alt="House"
            className="house-image"
          />

          <div>
            <h1>I gør det godt!</h1>

            <p>9 opgaver klaret denne uge</p>
            <p><strong>3 opgaver mangler i dag</strong></p>

            <div className="progress-bar">
              <div className="progress"></div>
            </div>

            <p className="overview">Se ugens overblik →</p>
          </div>
        </div>
      </section>

      {/* Task section */}
      <section className="card">
        <div className="task-header">
          <h2>Dagens fokus</h2>
          <span>4 opgaver</span>
        </div>

        <div className="task">
          <span>🍽️ Tøm opvaskemaskine</span>
          <button>+20 pt</button>
        </div>

        <div className="task">
          <span>👕 Vask tøj</span>
          <button>+50 pt</button>
        </div>

        <div className="task">
          <span>🧹 Støvsug</span>
          <button>+60 pt</button>
        </div>

        <div className="task">
          <span>👕 Hæng tøj op</span>
          <button>+40 pt</button>
        </div>

        <button className="admin-btn">
          Administrer opgaver
        </button>
      </section>

      {/* Goal section */}
      <section className="card">
        <h3>Mål: Vær klar til lørdag kl 18.00</h3>

        <div className="goal-row">
          <div className="progress-bar large">
            <div className="progress"></div>
          </div>

          <span className="percent">70%</span>
        </div>

        <p className="reset">Åben reset</p>
      </section> 

    </div>
  );
}
