import React from 'react';
import { TextField, Select, MenuItem, Grid, InputAdornment, Input } from '@material-ui/core';
import { MdSearch } from 'react-icons/md';

const Filters = () => {
    return (
        <Grid item container direction="row" justify="space-between" style={{ padding: '2rem' }}>
            <Grid item>
                <TextField
                    name="filter_countries"
                    variant="outlined"
                    label="Search for a country"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MdSearch />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item>
                <TextField name="filter_countries" variant="outlined" />
            </Grid>
        </Grid>
    );
};

export default Filters;
