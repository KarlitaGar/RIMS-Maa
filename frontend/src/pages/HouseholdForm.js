import React, { useState } from "react";
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Typography, ListItemText } from "@mui/material";
import { Grid, TextField, Select, MenuItem, Slider, Button, Checkbox} from "@mui/material";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';


const defaultValues = {
    mname: "",
    lname: "",
    ename: "",
    fname: "",
    address: "",
    gender: "",
    religion: "",
    dialect: "",
    ethnicity: "",
    relationship: "",
    status: "",
    sourceOfIncome: "",
    otherSource: "",
    soloparent: "",
    voter: "",
    income: 0,
    favoriteNumber: 0,
  };

// FOR ENVIRONMENT CONSTRAINTS
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      mazxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    },
  },
};

 // FOR LIVESTOCK AND POULTRY
const livestocks = [
    'None',
    'Pig',
    'Cow',
    'Sheep',
    'Chicken',
    'Goat',
    'Carabaos',
    'Others',
];

// function getStylesPoultry(poultry, poultryName, theme) {
//     return {
//       fontWeight:
//       poultryName.indexOf(poultry) === -1
//           ? theme.typography.fontWeightRegular
//           : theme.typography.fontWeightMedium,
//     };
// }
  


const HouseholdForm = () => {

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
        ...formValues,
        [name]: value,
        });
    };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  // FOR MULTIPLE SELECT
//   const theme = useTheme();
  const [constraintName, setConstraints] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setConstraints(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // setPoultry(
    //     // On autofill we get a stringified value.
    //     typeof value === 'string' ? value.split(',') : value,
    //   );
  };

  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '1000px', height: 1200, border: '1px solid red', borderRadius: 3 }}>
        <Grid item sx={{ paddingTop: 5}}>
            <Typography variant="h4" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 200 }}>
				For Households
			</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h7" color="black" align='center' sx={{ fontFamily: 'Helvetica' }}>
				Please fill in all the required fields.
			</Typography>
        </Grid>

        <form onSubmit={handleSubmit}>
        <Grid item>
            <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="name-input"
                        name="familyname"
                        label="Household Family Name"
                        type="text"
                        sx={{ width: 830 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
            </Grid>
        </Grid>

        <Grid item>
            <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="name-input"
                        name="address"
                        label="Household Address"
                        type="text"
                        sx={{ width: 830 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
            </Grid>
        </Grid>

        <Grid item>
            <Grid container direction='row' sx={{ paddingTop: 2 }}>
            <div style={{ width: "30px" }} />
                <TextField
                    id="name-input"
                    name="yearsOfResidence"
                    label="Years of Residence"
                    type="number"
                    sx={{ width: 400 }}
                    value={formValues.name}
                    onChange={handleInputChange}
                />
                <Grid sx={{ width: 30, height: 20 }}/>
                <TextField
                    id="name-input"
                    name="numberOfMembers"
                    label="Number of Members"
                    type="number"
                    sx={{ width: 400 }}
                    value={formValues.name}
                    onChange={handleInputChange}
                />
            </Grid>
        </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "30px" }} />
                    <TextField
                        id="name-input"
                        name="email"
                        label="Email Address"
                        type="email"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <Grid sx={{ width: 30, height: 20 }}/>
                    <TextField
                        id="name-input"
                        name="contact"
                        label="Contact Number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "23px" }} />
                    <Grid item>
                        <FormControl sx={{ m: 1, width: 400 }}>
                            <InputLabel id="demo-simple-select-label">Solid Waste Management</InputLabel>
                            <Select
                                name="wasteManagement"
                                value={formValues.wasteManagement}
                                onChange={handleInputChange}
                                input={<OutlinedInput label="Solid Waste Management" />}
                                >
                                <MenuItem value="1">Collected</MenuItem>
                                <MenuItem value="2">Thrown Anywhere</MenuItem>
                                <MenuItem value="3">Burning</MenuItem>
                                <MenuItem value="4">Burying</MenuItem>
                                <MenuItem value="5">Recycled</MenuItem>
                                <MenuItem value="6">Compose Pit</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ width: 15, height: 20 }}/>
                    <Grid item>
                        <FormControl sx={{ m: 1, width: 400 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Backyard Livestock & Poultry</InputLabel>
                        <Select
                        style={{textAlign:'left'}}
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={constraintName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Backyard Livestock & Poultry" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {livestocks.map((title) => (
                            <MenuItem key={title} value={title}>
                            <Checkbox checked={constraintName.indexOf(title) > -1} />
                            <ListItemText primary={title} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Grid>
                    
                    <Grid sx={{ width: 13, height: 20 }}/>

                    
                
                </Grid>            
            </Grid>

            <Grid container direction='row' justifyContent='flex-end' sx={{ paddingTop:5 }}>
                <Button variant="contained" type="submit" style={{ backgroundColor: 'primary' }}>
                    Submit
                </Button>       
            </Grid>
            
        </form>
    </Grid>
    
  )
}

export default HouseholdForm


