import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <header>
      <nav>
        {shows.map((show) => (
          <a
            key={show.name}
            className="show"
            onClick={() => setSelectedShow(show)}
          >
            {show.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
