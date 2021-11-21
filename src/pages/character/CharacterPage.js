import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button, ListGroup, Container } from 'react-bootstrap';
import EpisodeCard from '../../components/episode-card/EpisodeCard';
import { useParams } from 'react-router';
import NavBar from '../../components/navbar/NavBar';



const CharacterPage = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => { setCharacter(res.data) })
    }, [])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <section style={{ background: "black" }}>
                <Container style={{ display: "flex", justifyContent: "center" }}>
                    <Card style={{ width: '18rem', margin: "46px" }}>
                        <Card.Img variant="top" src={character?.image} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{character?.name}</Card.Title>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="text-center">Species: {character?.species}</ListGroup.Item>
                            <ListGroup.Item className="text-center">Gender: {character?.gender}</ListGroup.Item>
                            <ListGroup.Item className="text-center">Status: {character?.status}</ListGroup.Item>
                            <ListGroup.Item className="text-center">Location: {character?.location?.name}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <h6 style={{ textAlign: 'center' }}>Episodes:</h6>
                            {character?.episode.map((episodes, index) => (<EpisodeCard key={index} episodes={episodes} />))}
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </>
    )
}

export default CharacterPage