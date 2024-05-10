import React from "react";
import { setByExperience } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { experiences } from "../Constants";
import { TextField, Autocomplete, MenuItem, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Experience() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const selectedExperience = filters.Experience;

  const handleInputChange = (event, value) => {
    dispatch(setByExperience(value));
  };
  return (
    <Autocomplete
      sx={{ m: 1, minWidth: "180px", maxHeight: "5px", maxWidth: "auto" }}
      options={experiences}
      getOptionLabel={(option) => option.toString()}
      value={selectedExperience}
      isOptionEqualToValue={(option, value) =>
        value === "" || value === null || option === value
      }
      onChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Experience"
          size="small"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem {...props} key={option} selected={selected}>
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            sx={{
              margin: 1,
              backgroundColor: "#E6E6E6",
              fontWeight: "light",
              color: "lightblack",
              borderRadius: "5px",
              height: "25px",
              fontSize: "12px",
              "& .MuiChip-deleteIcon:hover": {
                color: "#CD5C5C",
              },
            }}
          />
        ))
      }
    />
  );
}
