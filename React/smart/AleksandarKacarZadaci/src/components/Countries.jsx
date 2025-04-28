import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import CountryCard from "./CountryCard";

export default function Countries({ filter, search }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const url =
      "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json";
    const response = await axios.get(url);
    console.log(response);
    setCountries(Object.values(response.data));
    try {
    } catch (error) {
      console.log("Error getting countries", error);
    } finally {
      setIsLoading(false);
      console.log(countries);
    }
  };

  const filteredData = countries.filter((country) => {
    //if no input the return the original

    if (search === "") {
      return country;
    }

    //return the item which contains the user input
    else {
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  const regionFilteredData = filteredData.filter((country) => {
    if (filter === "") {
      return country;
    } else {
      return country.region.includes(filter);
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  console.log(countries);

  return (
    <Box className="countries-wrapper">
      {regionFilteredData.map((country) => {
        return <CountryCard country={country} />;
      })}
    </Box>
  );
}
