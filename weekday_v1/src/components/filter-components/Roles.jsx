import { useDispatch } from "react-redux";
import { setRoles } from "../store";
import { roles } from "../Constants";
import {
  TextField,
  Autocomplete,
  MenuItem,
  Chip,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Roles() {
  const dispatch = useDispatch();

  const handleInputChange = (event, value) => {
    const selectedRoles = value.map((role) => role.role);
    dispatch(setRoles(selectedRoles));
  };

  return (
    <Autocomplete
      sx={{ m: 1, minWidth: 150, maxHeight: "15px", maxWidth: "auto" }}
      multiple
      options={roles}
      getOptionLabel={(option) => option.role}
      isOptionEqualToValue={(option, value) =>
        option.role.toLowerCase() === value.role.toLowerCase()
      }
      disableCloseOnSelect
      onChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Roles" size="small" />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem
          {...props}
          key={option.role}
          value={option.role}
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: "5px",
            fontSize: "0.8rem",
          }}
        >
          <div>
            <Typography variant="body1">{option.role}</Typography>
          </div>
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const { key, ...otherProps } = getTagProps({ index });
          return (
            <Chip
              key={key}
              variant="outlined"
              label={option.role}
              {...otherProps}
              sx={{
                margin: 1,
                maxWidth: "auto",
                backgroundColor: "#E6E6E6",
                fontWeight: "light",
                color: "lightblack",
                borderRadius: "5px",
                height: "25px",
                fontSize: "12px",
                "& .MuiChip-deleteIcon:hover": {
                  color: "#CD5C5C",
                },
                "& .MuiAutocomplete-tag": {
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "4px",
                },
              }}
            />
          );
        })
      }
    />
  );
}
