import React, { useState, useEffect } from "react";
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase.utils";

function Upcoming() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const eventsCollectionRef = collection(db, "Events");
    const getEvents = async () => {
      const q = query(eventsCollectionRef, orderBy("date"), limit(9));
      const data = await getDocs(q);
      console.log(data);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, []);
  return (
    <>
      <h1>Upcoming Events</h1>
      <div className="card-container">
        {events.map((e) => (
          <div>
            <div className="events-card">
              <center>
                <img src={e.linkImg} alt="tournament1 img" width="300px" />
                <h3>{e.ename}</h3>
                <div className="info">
                  <p className="right">{e.date}</p>
                  <p className="left">{e.timings}</p>
                </div>
                <button>Explore</button>
              </center>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Upcoming;
