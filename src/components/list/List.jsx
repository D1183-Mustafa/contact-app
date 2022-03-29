import React, { useState } from "react";
import "./List.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CancelIcon from "@mui/icons-material/Cancel";

// const style = {
//   width: "100%",
//   maxWidth: 360,
//   bgcolor: "#DFDFDE",
// };

function Lists({ contacsList }) {
  const [search, setSearch] = useState("");
  console.log(search);

  const filtered = contacsList.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toLowerCase().includes(search.toLowerCase());
    });
  });

  const listRemove = (e) => {
      console.log(e.target.tagName);
      if(e.target.tagName==="path"){
          e.target.parentElement.parentElement.remove();
      }else if(e.target.tagName==="svg"){
        e.target.parentElement.remove();
      }
  }

  return (
    <div className="list">
      <Box
        sx={{
          width: 300,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Ara"
          id="fullWidth"
          name="name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <List className="liste" component="nav" aria-label="mailbox folders">
        {filtered.map((e, i) => {
          return (
            <ListItem key={i} className="list-item">
              <ListItemAvatar>
                <Avatar>
                  <PersonPinIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={e.name} secondary={e.phone_number} />
              <CancelIcon className="icon" onClick={listRemove}/>
            </ListItem>
          );
        })}
      </List>
      {/* <ul>
        {filtered.map((e, i) => {
          return <li key={i}>{e.name}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default Lists;
