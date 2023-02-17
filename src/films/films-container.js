import React, {useState} from "react";
import FilmsComponent from "./films-component";
import {getFilms} from "../API/api";
import {useDispatch} from "react-redux";
import {set_films_count, set_films_current_page} from "../redux/Actions/filmsAction";

function FilmsContainer() {
    const [text, setText] = useState()
    const [films, setFilms] = useState([])
    const [search, setSearch] = useState(false)
    const [filterText, setFilterText] = useState('')
    const dispatch = useDispatch()

    const searchFilms = (page=1) => {
        dispatch(set_films_current_page(page))
        getFilms(text, filterText, page).then(response=> {
            dispatch(set_films_count(response.data.totalResults))
            setFilms(response.data.Search)

            })
        setSearch(true)
    }
    return (
        <FilmsComponent  searchFilms = {searchFilms} setText = {setText} films={films} search={search} setFilterText={setFilterText}/>
    );
}

export default FilmsContainer;