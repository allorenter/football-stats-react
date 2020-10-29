import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { colors, DivFlex, lightenDarkenColor } from "../styles/styles";
import { MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { getUrlRequest } from "../utils/utils";

const StyledSelect = styled(Select)({
  color: colors.font,
  fontWeight: "600",
  minWidth: "2rem",
  paddingLeft: "8px",
  background: lightenDarkenColor(colors.tertiary, 30),
  borderRadius: "4px",
  fontSize: ".85rem",
  minWidth: "190px",
  paddingTop: "1px",
  "& svg": {
    color: colors.font,
  },
  "&:hover":{
    opacity: ".8"
  }
});

const StyledItem = styled(MenuItem)({
  fontSize: ".85rem",
  minWidth: "176px"
});

const StatsFilters = () => {
  const [selectedStat, setSelectedStat] = useState("FTG");
  const [open, setOpen] = React.useState(false);
  const [stats, setStats] = useState([]);
  
  useEffect(() => {
    axios
    .get(getUrlRequest("stat/get"))
    .then((res) => {
      setStats(res.data.data);
    })
    .catch((e) => {
      
    });
  }, [])
  
  
  return (
    <DivFlex>
      <StyledSelect
          disableUnderline 
          id="statSelector"
          open={open}
          onClose={()=>setOpen(false)}
          onOpen={()=>setOpen(true)}
          value={selectedStat}
          onChange={e=>setSelectedStat(e.target.value)}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
        >
          {stats.map(stat => <StyledItem key={stat._id} value={stat._id}>{stat.name}</StyledItem>)}
        </StyledSelect>

    </DivFlex>
  );
};

export default StatsFilters;
