import React from "react";
import "./films.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilms } from "../API/api";

function FilmsComponent(props) {
  const { searchFilms, setText, films, search, setFilterText } = props;
  const { pageSize, totalFilmsCount, currentPage } = useSelector(
    (state) => state.FilmsReducer
  );
  let pages = Math.ceil(totalFilmsCount / pageSize);
  let pagesCount = [];
  for (let i = 1; i <= pages; i++) {
    pagesCount.push(i);
  }
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          className="form-control"
          autoFocus
          placeholder="Введите название фильма"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={searchFilms}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Поиск
        </button>
      </div>
      {search ? (
        <select
          onChange={(e) => setFilterText(e.target.value)}
          id={"select"}
          className="form-select"
          aria-label="Default select example"
        >
          <option selected value="">
            Все
          </option>
          <option value="movie">Фильмы</option>
          <option value="series">Серии</option>
          <option value="episode">Эпизоды</option>
        </select>
      ) : (
        <></>
      )}
      <div className={"films"}>
        {films.map((film, index) => {
          console.log(film);
          return (
            <div className="card">
              <img src={film.Poster} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{film.Title}</h5>
                <p className="card-text">Год выпуска: {film.Year}</p>
                <NavLink
                  to={`/films/${film.imdbID}`}
                  className="btn btn-primary"
                >
                  Показать больше
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      {search ? (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link">Previous</button>
            </li>
            {pagesCount
              .slice(
                currentPage === 1 ? currentPage - 1 : currentPage - 2,
                currentPage + 1
              )
              .map((page, index) => {
                return (
                  <li className="page-item">
                    <button
                      onClick={() => {
                        searchFilms(page);
                      }}
                      className="page-link"
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FilmsComponent;
