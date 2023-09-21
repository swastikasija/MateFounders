import React, { useEffect, useState } from "react";
import { db } from "./firebase.utils";
import { collection, getDocs, addDoc } from "firebase/firestore";
function Organize() {
  const [date, setDate] = useState("");
  const [ename, setEname] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [timings, setTimings] = useState("");
  const [Events, setEvents] = useState([]);
  const eventsCollectionRef = collection(db, "Events");
  const createEvent = async () => {
    const ad = await addDoc(eventsCollectionRef, {
      timings: timings,
      date: date,
      ename: ename,
      linkImg: linkImg,
    });
    console.log(ad);
  };
  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, []);
  return (
    <>
      <div className="organize">
        <center>
          <h1>Want to organize an event</h1>
          <p>Fill the forum given below</p>
          <br />
        </center>
      </div>
      <center>
        <input
          type="text"
          placeholder="Name of event"
          onChange={(event) => setEname(event.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Enter link of the image"
          onChange={(event) => setLinkImg(event.target.value)}
          required
        />
        <br />
        <input
          type="date"
          placeholder="Date of the event"
          onChange={(event) => setDate(event.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Timings of the event"
          onChange={(event) => setTimings(event.target.value)}
          required
        />
        <br />
        <button onClick={createEvent}>Organize</button>
      </center>
      <div></div>
    </>
  );
}

export default Organize;
