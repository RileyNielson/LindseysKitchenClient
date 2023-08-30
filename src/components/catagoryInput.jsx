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
      <FormControl sx={{ m: 0, width: "100%", height:25, padding:0}}>
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
          style={{height:25, width:"100%", maxWidth:300}}
        >
          {props.catagories.map((name) => (
            <MenuItem key={name} value={name} sx={{height:"25px", minHeight:0, width:"50px"}}>
              <Checkbox checked={props.catagoryValues.indexOf(name) > -1} />
              <ListItemText primary={name} sx={{padding:0, width:"50"}}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
