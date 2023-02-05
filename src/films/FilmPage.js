import React, {useState} from "react";
import "./films.css";
import {NavLink, useLocation} from "react-router-dom";
import {getFilmData} from "../API/api";

function FilmPage(props) {
    const location = useLocation()
    const [filmInfo, setFilmInfo] = useState({})
    getFilmData(location.pathname.slice(7)).then(response=>{
        setFilmInfo(response.data)
    })

    return (
        <div className='film-desc-cont'>
            <div className="card large-card">
                <img src={filmInfo.Poster} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{filmInfo.Title}</h5>
                    </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">О фильме: <br/>{filmInfo.Plot}</li>
                <li className="list-group-item">Год выхода: {filmInfo.Released}</li>
                <li className="list-group-item">Актеры: {filmInfo.Actors}</li>
                <li className="list-group-item">Длительность фильма: {filmInfo.Runtime}</li>
                <li className="list-group-item">Рейтинг: </li>
            </ul>
        </div>
    );
}

export default FilmPage;