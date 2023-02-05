import React from "react";
import "./films.css";
import {NavLink} from "react-router-dom";

function FilmsComponent(props) {
    const {searchFilms, setText, films} = props

    return (
        <div className='container'>
            <div className="input-group mb-3">
                <input onChange={(e) => {setText(e.target.value)}}
                 type="text" className="form-control" autoFocus placeholder="Введите название фильма"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={searchFilms} className="btn btn-outline-secondary" type="button" id="button-addon2">Поиск</button>
            </div>
            <div className={'films'}>
                {films.map((film, index) => {
                    console.log(film)
                    return(
                        <div className="card">
                            <img src={film.Poster} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{film.Title}</h5>
                                    <p className="card-text">Год выпуска: {film.Year}</p>
                                    <NavLink to={`/films/${film.imdbID}`} className="btn btn-primary">Показать больше</NavLink>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FilmsComponent;