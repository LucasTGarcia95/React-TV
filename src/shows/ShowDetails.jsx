import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <main className="show-details empty">
        <p>Select a show to see its episodes.</p>
      </main>
    );
  }

  return (
    <main className="show-details">
      <h2>{show.name}</h2>
      <div className="layout">
        <EpisodeList
          episodes={show.episodes}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </main>
  );
}
