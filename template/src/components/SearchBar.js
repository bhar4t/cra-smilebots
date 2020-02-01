import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

export default function SearchBar({data, labelField, searchedData, handleSearch, hintText}) {
  return (
    <Autocomplete
      closeIcon={<SearchRoundedIcon />}
      options={data}
      getOptionLabel={option => option[labelField]}
      value={searchedData}
      onChange={handleSearch}
      renderInput={params => (
        <TextField {...params} label={hintText} margin="normal" fullWidth />
      )}
    />
  );
}
