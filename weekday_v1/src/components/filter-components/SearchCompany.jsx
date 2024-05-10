import React from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setBySearch } from "../store";
import TextField from "@mui/material/TextField";

export default function SearchCompany() {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    dispatch(setBySearch(searchValue));
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "200px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search Company"
        size="small"
        variant="outlined"
        onChange={handleSearchChange}
      />
    </Box>
  );
}
