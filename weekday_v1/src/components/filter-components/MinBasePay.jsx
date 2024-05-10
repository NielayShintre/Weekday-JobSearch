import { setMinBasePay } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Autocomplete, MenuItem, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { basePay } from "../Constants";

export default function MinBasePay() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const selectedBasePay = filters.minBasePay;

  const handleInputChange = (event, value) => {
    dispatch(setMinBasePay(value));
  };

  return (
    <Autocomplete
      sx={{ m: 1, minWidth: "200px", maxHeight: "5px", maxWidth: "auto" }}
      options={basePay}
      getOptionLabel={(option) => option.toString()}
      value={selectedBasePay}
      isOptionEqualToValue={(option, value) =>
        value === null || option === value || option === Number(value)
      }
      onChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          size="small"
          label="Minimum Base Pay"
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
