import React, { useState } from "react";
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Typography, Card } from "@mui/material";
import { Grid, TextField, Button} from "@mui/material";

const defaultValues = {
    pwdid: "",
    dateissued: "",
    socialaffiliation: "",
    causeofdisability: "",
    ailments: "",
    medicinemaintenance: "",
    skills: "",
    talents: "",
    assistingGov: "",
    formofassistance: "",
  };


const PwdForm = () => {
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

  return (
    <Card>
    {/* For Desktop UI */}
        <Grid container direction='column' alignItems='center' sx={{ width: '1000px', height: 950, border: '1px solid red', borderRadius: 3, display: { xs: 'none', lg: 'block', xl: 'none' } }}>
    <Grid item sx={{ paddingTop: 5}}>
        <Typography variant="h4" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 200 }}>
            For Persons with Disabilities
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
                <div style={{ width: "80px" }} />
                    <TextField
                        id="name-input"
                        name="pwdid"
                        label="PWD ID"
                        type="number"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <Grid sx={{ width: 30, height: 20 }}/>
                    <TextField
                        id="name-input"
                        name="dateissued"
                        label="Date Issued"
                        type="number"
                        sx={{ width: 400 }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
            </Grid>
        </Grid>
            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                        <TextField
                            id="name-input"
                            name="socialaffiliation"
                            label="Social Security Affiliation"
                            type="text"
                            sx={{ width: 830 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

           <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                        <TextField
                            id="name-input"
                            name="causeofdisability"
                            label="Cause of Disability"
                            type="text"
                            sx={{ width: 830 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                        <TextField
                            id="name-input"
                            name="ailments"
                            label="Ailments"
                            type="text"
                            sx={{ width: 830 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                        <TextField
                            id="name-input"
                            name="medicinemaintenance"
                            label="Medicine Maintenance"
                            type="text"
                            sx={{ width: 830 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="skills"
                            label="Skills"
                            multiline
                            maxRows={5}
                            type="text"
                            sx={{ width: 400 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        <Grid sx={{ width: 30, height: 20 }}/>
                        <TextField
                            id="outlined-multiline-flexible"
                            name="talents"
                            label="Talents"
                            multiline
                            maxRows={5}
                            type="text"
                            sx={{ width: 400 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>
            
            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                    <FormControl sx={{ width: 300}}>
                        <FormLabel >Received Goverment Assistance</FormLabel>
                            <RadioGroup
                            name="voter"
                            value={formValues.voter}
                            onChange={handleInputChange}
                            row
                            >
                            <FormControlLabel
                                key="1"
                                value="1"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="2"
                                value="2"
                                control={<Radio size="small" />}
                                label="Yes"
                            />
                            </RadioGroup>
                        </FormControl>

                        <Grid sx={{ width: 130, height: 20 }}/>
                        <TextField
                            id="name-input"
                            name="assistingGov"
                            label="Assisting Government"
                            type="text"
                            sx={{ width: 400 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                <div style={{ width: "80px" }} />
                        <TextField
                            id="name-input"
                            name="formofassistance"
                            label="Form of Assistance"
                            type="text"
                            sx={{ width: 830 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='flex-end' sx={{ paddingTop:5 }}>
                <Button variant="contained" type="submit" style={{ backgroundColor: 'primary' }}>
                    Submit
                </Button>       
            </Grid>
            
        </form>
        </Grid>
    
    {/* For Mobile UI */}
        <Grid container direction='column' alignItems='center' sx={{ padding: '20px', width: '400px', height: 700, border: '1px solid red', borderRadius: 3, display: { xs: 'block', lg: 'none', xl: 'block' } }}>
        <Grid item sx={{ paddingTop: 5}}>
            <Typography variant="h5" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 200 }}>
                For Persons with Disabilities
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h8" color="black" align='center' sx={{ fontFamily: 'Helvetica' }}>
                Please fill in all the required fields correctly.
            </Typography>
        </Grid>


        <form onSubmit={handleSubmit}>

            <Grid item>
                <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                        <TextField
                            id="name-input"
                            name="yearsOfResidence"
                            label="PWD ID"
                            type="number"
                            sx={{ width: 400 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        <Grid sx={{ width: 30, height: 20 }}/>
                        <TextField
                            id="name-input"
                            name="numberOfMembers"
                            label="Date Issued"
                            type="number"
                            sx={{ width: 400 }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                </Grid>
            </Grid>
                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                            <TextField
                                id="name-input"
                                name="familyname"
                                label="Social Security Affiliation"
                                type="text"
                                sx={{ width: 830 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>

            <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                            <TextField
                                id="name-input"
                                name="address"
                                label="Cause of Disability"
                                type="text"
                                sx={{ width: 830 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                            <TextField
                                id="name-input"
                                name="address"
                                label="Ailments"
                                type="text"
                                sx={{ width: 830 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                            <TextField
                                id="name-input"
                                name="address"
                                label="Medicine Maintenance"
                                type="text"
                                sx={{ width: 830 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                            <TextField
                                id="outlined-multiline-flexible"
                                name="circumstance"
                                label="Skills"
                                multiline
                                maxRows={5}
                                type="text"
                                sx={{ width: 400 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                            <Grid sx={{ width: 30, height: 20 }}/>
                            <TextField
                                id="outlined-multiline-flexible"
                                name="circumstance"
                                label="Talents"
                                multiline
                                maxRows={5}
                                type="text"
                                sx={{ width: 400 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                        <FormControl sx={{ width: 300}}>
                            <FormLabel >Received Goverment Assistance</FormLabel>
                                <RadioGroup
                                name="voter"
                                value={formValues.voter}
                                onChange={handleInputChange}
                                row
                                >
                                <FormControlLabel
                                    key="1"
                                    value="1"
                                    control={<Radio size="small" />}
                                    label="No"
                                />
                                <FormControlLabel
                                    key="2"
                                    value="2"
                                    control={<Radio size="small" />}
                                    label="Yes"
                                />
                                </RadioGroup>
                            </FormControl>

                            <Grid sx={{ width: 130, height: 20 }}/>
                            <TextField
                                id="name-input"
                                name="assistingGov"
                                label="Assisting Government"
                                type="text"
                                sx={{ width: 400 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction='row' sx={{ paddingTop: 2 }}>
                    <div style={{ width: "80px" }} />
                            <TextField
                                id="name-input"
                                name="assistance"
                                label="Form of Assistance"
                                type="text"
                                sx={{ width: 830 }}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='flex-end' sx={{ paddingTop:5 }}>
                    <Button variant="contained" type="submit" style={{ backgroundColor: 'primary' }}>
                        Submit
                    </Button>       
                </Grid>
                
            </form>
        </Grid>
    </Card>
  )
}

export default PwdForm