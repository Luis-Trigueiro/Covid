import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from '../../components/card/CharacterCard';
import { Row, Button } from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import { scrollTop } from 'dom-helpers';


const Home = () => {

    const [characters, setCharacters] = useState([])

    const scrollTop = () => {
		document.body.scrollTo({ top: 0, behavior: 'smooth' })
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
	}

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(res => { setCharacters(res.data) })

    }, []);

    const allCharacters = characters.results;

    const alive = () => axios.get('https://rickandmortyapi.com/api/character/?status=alive').then(res => { setCharacters(res.data) })
    const dead = () => axios.get('https://rickandmortyapi.com/api/character/?status=dead').then(res => { setCharacters(res.data) })
    const all = () => axios.get('https://rickandmortyapi.com/api/character').then(res => { setCharacters(res.data) })

    const nextPage = () => { axios.get(characters.info?.next).then(res => { setCharacters(res.data);scrollTop() }) };
    const backPage = () => { axios.get(characters.info?.prev).then(res => { setCharacters(res.data);scrollTop() }) };


    return (
        <>
            <header>
                <NavBar alive={alive} dead={dead} all={all} />
            </header>
            <Row style={{ background: "black", padding: "26px 0 0 50px" }}>
                {allCharacters?.map((character, index) => (<CharacterCard key={index} character={character} />))}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {characters?.info?.prev && <Button style={{ margin: "20px" }} onClick={backPage}>Back</Button>}
                    {characters?.info?.next && <Button style={{ margin: "20px" }} onClick={nextPage}>Next</Button>}
                </div>
            </Row>
        </>
    )

}

export default Home