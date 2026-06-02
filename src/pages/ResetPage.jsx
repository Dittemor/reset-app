import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./ResetPage.css"; 

const URL = import.meta.env.VITE_SUPABASE_URL + "reset";

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_APIKEY}`,
};

export default function ResetPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(URL, {
          headers,
        });

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  const reasons = items.filter((item) => item.type === "reason");
  const levels = items.filter((item) => item.type === "level");
  const focuses = items.filter((item) => item.type === "focus");

  return (
    <main className="reset-page">
      <h1>Planlæg reset</h1>

      {/* ANLEDNING */}
      <section>
        <h2>Hvad er anledningen?</h2>

        <div className="reason-grid">
          {reasons.map((item) => (
            <button key={item.id} className="reason-card">
              <Icon icon={item.icon} width="40" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* NIVEAU */}
      <section>
        <h2>Hvor meget vil du opnå?</h2>

        <div className="chip-container">
          {levels.map((item) => (
            <button key={item.id} className="chip">
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* FOKUS */}
      <section>
        <h2>Hvad fokuserer du på?</h2>

        <div className="chip-grid">
          {focuses.map((item) => (
            <button key={item.id} className="chip">
              {item.title}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
