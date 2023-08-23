import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

export default function CatagoryInput(props) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(event.target);
    const cat = typeof value === "string" ? value.split(",") : value;
    props.setRecipe((prev) => {
      return { ...prev, [event.target.name]: cat };
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 275, height:30, padding:0}}>
        <InputLabel></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          name={props.name}
          value={props.catagoryValues}
          onChange={handleChange}
          input={<OutlinedInput/>}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          style={{height:30}}
        >
          {props.catagories.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={props.catagoryValues.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
