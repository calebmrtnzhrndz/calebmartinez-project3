export default function ({ text1, year, films }) {
  if (!year) {
    return <p className="msg">Enter a year above (or 0000)</p>;
  }
  if (year.length != 4) {
    return <p className="msg">Please enter a valid year.</p>;
  }
  if (films.length === 0) {
    return <p className="msg">No films found for {year}.</p>;
  }
  return (
    <div>
      <p className="msg">
        {text1} {year}
      </p>
      <ul>
        {films.map((film) => (
          <li>
            <img
              className="poster"
              src={film.image}
              alt={`${film.title} poster`}
            />
            <div className="info">
              <p>
                <h2>
                  <u>{film.title}</u>
                </h2>
              </p>
              <p>
                <strong>Director: </strong> {film.director}
              </p>
              <p>
                <strong>Producer: </strong>
                {film.producer}
              </p>
              <p>
                <strong>Release Year: </strong>
                {film.release_date}
              </p>
              <p>
                <strong>Runtime: </strong>
                {film.running_time} minutes
              </p>
              <p>
                <strong>RT Score: </strong> {film.rt_score}%{" "}
              </p>
              <p>{film.description}</p>

              <img
                className="banner"
                src={film.movie_banner}
                alt={`${film.title} banner`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
