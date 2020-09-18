import React from "react";
import TextField from "@material-ui/core/TextField";
const Filter = ({ filter, getFilterName }) => {
  return (
    <>
      <h2>Contacts</h2>
      <TextField
        type="text"
        value={filter}
        name="filter"
        onChange={getFilterName}
      />
    </>
  );
};

export default Filter;
