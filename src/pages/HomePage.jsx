import { useEffect, useState } from "react";
import "./HomePage.css";
import { Icon } from "@iconify/react"; 
import { useNavigate } from "react-router-dom"; 

const URL = import.meta.env.VITE_SUPABASE_URL + "daily-chores";
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function HomePage() {
  const [dailyChores, setDailyChores] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getChores() {
      const response = await fetch(URL, { headers });
      const data = await response.json();
      console.log(data);
      setDailyChores(data);
    }

    getChores();
  }, []);

async function completeChore(id) {
  const chore = dailyChores.find((c) => c.id === id);

  const newValue = !chore.completed;

  await fetch(`${URL}?id=eq.${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      completed: newValue,
    }),
  });

  setDailyChores((current) =>
    current.map((chore) =>
      chore.id === id ? { ...chore, completed: newValue } : chore,
    ),
  );
} 

   console.log(dailyChores); 

  return (
    <div className="home">
      {/* Top card */}
      <section className="card hero-card">
        <div className="hero-content">
          <img src="images/hus.png" alt="House" className="house-image" />

          <div>
            <h1>I gør det godt!</h1>

            <p>9 opgaver klaret denne uge</p>
            <p>
              <strong>3 opgaver mangler i dag</strong>
            </p>

            <div className="progress-bar">
              <div className="progress"></div>
            </div>

            <p className="overview">Se ugens overblik →</p>
          </div>
        </div>
      </section>

      <div className="task-header">
        <h2>Dagens fokus</h2>
        <span>4 opgaver</span>
      </div>

      {/* Task section */}
      <section className="card">
        {[...dailyChores]
          .sort((a, b) => a.completed - b.completed)
          .map((chore) => (
            <div
              className={`task ${chore.completed ? "completed" : ""}`}
              key={chore.id}
            >
              <span className="task-label">
                <span
                  className="icon-circle"
                  style={{ backgroundColor: chore.icon_color }}
                >
                  <Icon
                    icon={chore.icon}
                    width="20"
                    height="20"
                    color="white"
                  />
                </span>
                {chore.title}
              </span>
              <div className="task-right">
                <button>+{chore.points} pt</button>

                <button
                  className="check-circle"
                  onClick={() => completeChore(chore.id)}
                />
              </div>
            </div>
          ))}

        <button className="admin-btn" onClick={() => navigate("/admin")}>
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
