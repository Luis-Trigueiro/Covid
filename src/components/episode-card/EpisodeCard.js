import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types'
import { propTypes } from "react-bootstrap/esm/Image";

const EpisodeCard = ({ episodes }) => {

  const history = useNavigate()

  const [episode, setepisode] = useState();



  useEffect(() => {
   axios.get(episodes).then(res => { setepisode(res.data) })
  }, [])

 
  console.log(episodes)
  console.log(episode)

return (
  <ListGroup variant="flush">
    <ListGroup.Item href="#">{episode?.name};</ListGroup.Item>
  </ListGroup>

)
}

EpisodeCard.propTypes = {
  episodes: PropTypes.string
}
export default EpisodeCard