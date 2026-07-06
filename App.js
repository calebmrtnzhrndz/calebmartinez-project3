import "./styles.css";
import Title from "./Title";
import Entry from "./Entry";
import Message from "./Message";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [year, setYear] = useState("");
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((r) => r.json())
      .then((r) => setFilm(r))
      .catch((e) => setFilm([]));
  }, []);

  let filtered = film.filter((film) => film.release_date === year);
  if (year === "0000") {
    filtered = film;
  }

  return (
    <div className="App">
      <Title text="Display Studio Ghibli Films by Year" />
      <Entry action={setYear} />
      <Message
        text1="Studio Ghibli Films for Year: "
        year={year}
        films={filtered}
      />
      <Footer
        link="https://github.com/calebmrtnzhrndz/calebmartinez-project3"
        text="GitHub Repository"
      />
    </div>
  );
}
