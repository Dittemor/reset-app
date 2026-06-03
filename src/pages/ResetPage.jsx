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

  const [selectedDate, setSelectedDate] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  const [selectedReasons, setSelectedReasons] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedFocuses, setSelectedFocuses] = useState([]);

   function toggle(id, selected, setSelected) {
     if (selected.includes(id)) {
       setSelected(selected.filter((x) => x !== id));
     } else {
       setSelected([...selected, id]);
     }
   }  

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
            <button
              key={item.id}
              className={`reason-card ${
                selectedReasons.includes(item.id) ? "selected" : ""
              }`}
              onClick={() =>
                toggle(item.id, selectedReasons, setSelectedReasons)
              }
            >
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
            <button
              key={item.id}
              className={`chip ${
                selectedLevels.includes(item.id) ? "selected" : ""
              }`}
              onClick={() => toggle(item.id, selectedLevels, setSelectedLevels)}
            >
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
            <button
              key={item.id}
              className={`chip ${
                selectedFocuses.includes(item.id) ? "selected" : ""
              }`}
              onClick={() =>
                toggle(item.id, selectedFocuses, setSelectedFocuses)
              }
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* DATO KNAP */}
        <div className="date-wrapper">
          <button
            className="date-chip"
            onClick={() => setOpenCalendar(!openCalendar)}
          >
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString("da-DK")
              : "Vælg dato"}
          </button>

          {openCalendar && (
            <div className="calendar-popup">
              <input
                type="date"
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setOpenCalendar(false);
                }}
              />
            </div>
          )}

      
        </div>
      </section>
    </main>
  );
}
