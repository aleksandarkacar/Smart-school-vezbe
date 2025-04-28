import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function NavSearch({
  filter,
  handleChangeFilter,
  search,
  handleChangeSearch,
}) {
  return (
    <div className="nav-search">
      <FormControl>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon />
          <TextField
            id="input-with-sx"
            label="Search for..."
            variant="standard"
            value={search}
            onChange={handleChangeSearch}
          />
        </Box>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
        <Select
          className="filter"
          value={filter}
          label="Filter by Region"
          onChange={handleChangeFilter}
        >
          <MenuItem value={""}>None</MenuItem>
          <MenuItem value={"Americas"}>Americas</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
