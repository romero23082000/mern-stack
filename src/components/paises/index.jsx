import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const Paises = () => {
  const [country, setCountry] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [label, setLabel] = useState(false);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountry(res.data);
    });
  }, []);

  useEffect(() => {
    const params = {
      access_key: "e16a0d17dbcbe27afe13dea76de9774b",
      query: "London",
    };
    axios
      .get(`https://api.weatherstack.com/current`, { params })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("An error occurred: ", error);
      });
  }, [country]);

  const handleCity = (event) => {
    setSearchCity(event.target.value);
  };

  const countryToShow = !searchCity
    ? country
    : country.filter((item) =>
        item.name.official.toLowerCase().includes(searchCity.toLowerCase())
      );

  const showItem = (item) => {
    setSearchCity(item.name.official);
  };

  return (
    <div>
      <p>Find countries</p>
      <input onChange={handleCity} type="text" value={searchCity} />
      <br />
      {countryToShow.length > 9 && searchCity && (
        <label>Too many matches, Specify another filter</label>
      )}
      {countryToShow.length < 9 &&
        countryToShow.length > 1 &&
        countryToShow.map((item) => {
          return (
            <>
              <p key={item.cca2}>
                {item.name.official}{" "}
                <button onClick={() => showItem(item)}>show</button>
              </p>
            </>
          );
        })}
      {countryToShow.length == 1 &&
        countryToShow.map((item) => {
          return (
            <Fragment key={item.cca2}>
              <h4>{item.name.official}</h4>
              <p>Capital: {item.capital[0]}</p>
              <p>Population: {item.population}</p>
              <h6>Languages</h6>
              {Object.keys(item.languages).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <img src={item.flags.png} />
            </Fragment>
          );
        })}
    </div>
  );
};

export default Paises;
