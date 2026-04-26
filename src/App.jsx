/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";
import "./index.css";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="app">
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
        <ShowDetails show={selectedShow} />
      </main>
    </div>
  );
}
