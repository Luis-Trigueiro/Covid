import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Row, Button } from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import { scrollTop } from 'dom-helpers';
import ReactTooltip from "react-tooltip";
import MapChart from "../../components/map-chart/MapChart"


const Home = () => {

    const [characters, setCharacters] = useState([])

    const scrollTop = () => {
        document.body.scrollTo({ top: 0, behavior: 'smooth' })
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        axios.get('https://covid-api.mmediagroup.fr/v1/cases?country=France').then(res => { setCharacters(res.data) })

    }, []);

   
    const allCharacters = characters.results;

    const alive = () => axios.get('https://rickandmortyapi.com/api/character/?status=alive').then(res => { setCharacters(res.data) })
    const dead = () => axios.get('https://rickandmortyapi.com/api/character/?status=dead').then(res => { setCharacters(res.data) })
    const all = () => axios.get('https://rickandmortyapi.com/api/character').then(res => { setCharacters(res.data) })

    const nextPage = () => { axios.get(characters.info?.next).then(res => { setCharacters(res.data); scrollTop() }) };
    const backPage = () => { axios.get(characters.info?.prev).then(res => { setCharacters(res.data); scrollTop() }) };
    const [content, setContent] = useState("");

    return (
        <>
            <header>
                <NavBar alive={alive} dead={dead} all={all} />
            </header>
    
            <div>
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        </>
    )

}

export default Home