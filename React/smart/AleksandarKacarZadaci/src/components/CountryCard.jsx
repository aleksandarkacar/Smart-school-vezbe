import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function CountryCard({ country }) {
  return (
    <Card className="country-card" variant="outlined">
      <CardMedia
        component="img"
        height="194"
        image={country.flag.large}
        alt="Flag"
        className="country-flag"
      />
      <Box className="country-details">
        <h3>{country.name}</h3>
        <h6>population: {country.population}</h6>
        <h6>Region: {country.region}</h6>
        <h6>Capital: {country.capital}</h6>
      </Box>
    </Card>
  );
}
