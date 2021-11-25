import React, { memo, useState, useEffect } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import axios from "axios";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { width } from 'dom-helpers';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {

  const [vacine, setvacine] = useState([]);
  const [country, setcountry] = useState([]);
  const [flags, setflags] = useState([]);

  useEffect(() => {
    axios.get('https://covid-api.mmediagroup.fr/v1/vaccines').then(res => { setvacine(res.data) });
    axios.get('https://covid-api.mmediagroup.fr/v1/cases').then(res => { setcountry(res.data) });
    axios.get('https://restcountries.com/v3.1/all').then(res => { setflags(res.data) });
  }, []);

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { abbreviation, ISO_A2, NAME } = geo.properties;
                    const vacineList = Object.values(vacine);
                    const countryList = Object.values(country);
                    const vaccineVerify = vacine.hasOwnProperty(NAME);
                    const countryData = countryList.find(x => x?.All?.abbreviation === ISO_A2);
                    const countryDataVaccinated = vacineList.find(x => x?.All?.abbreviation === ISO_A2);
                    const countryFlag = flags.find(x => x?.cca2 === ISO_A2);
                    const people_vaccinated = countryDataVaccinated?.All?.people_vaccinated;
                    const population = countryData?.All?.population;
                    const confirmed = countryData?.All?.confirmed;
                    const deaths = countryData?.All?.deaths;
                    const percentVaccinated = (people_vaccinated / population) * 100;
                    setTooltipContent(
                      <ListGroup>
                        <ListGroupItem>{NAME} <span> <img style={{ width: "20px" }} src={countryFlag?.flags?.png}></img></span></ListGroupItem>
                        {population && <ListGroupItem>Confirmed: {confirmed}</ListGroupItem>}
                        {population && <ListGroupItem>Population: {population}</ListGroupItem>}
                        {(vaccineVerify && population) && <ListGroupItem>People Vaccinated: {people_vaccinated}</ListGroupItem>}
                        {(vaccineVerify && population) && <ListGroupItem>Fully vaccinated population %: {Math.round(percentVaccinated)}%</ListGroupItem>}
                        {population && < ListGroupItem > Deaths: {deaths}</ListGroupItem>}
                      </ListGroup>);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
