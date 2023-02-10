import React, {useState} from "react";
import FilmsComponent from "./films-component";
import {getFilms} from "../API/api";

function FilmsContainer() {
    const [text, setText] = useState()
    const [films, setFilms] = useState([])
    const [search, setSearch] = useState(false)
    const searchFilms = () => {
        console.log(text)
        getFilms(text).then(response=>setFilms(response.data.Search))
        setSearch(true)
    }
    return (
        <FilmsComponent searchFilms = {searchFilms} setText = {setText} films={films} search={search}/>
    );
}

export default FilmsContainer;