import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { colors, DivFlex } from "../styles/styles";
import { MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { getUrlRequest } from "../utils/utils";

const StyledSelect = styled(Select)({
  color: colors.font,
  fontWeight: "600",
  minWidth: "2rem",
  "& svg": {
    color: colors.font,
  },
  "&:hover": {
    transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    color: colors.font,
    "& svg": {
      color: colors.font
    }
  },
  "&:hover::before": {
    borderBottom: `2px solid ${colors.detailsColor} !important`
  },
  "&::before": {
    borderBottom: `2px solid ${colors.font}`
  },
  "& div:focus": {
    background: colors.primary,
  },
  "&::after":{
    borderBottom: "none"
  }
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
          id="statSelector"
          open={open}
          onClose={()=>setOpen(false)}
          onOpen={()=>setOpen(true)}
          value={selectedStat}
          onChange={e=>setSelectedStat(e.target.value)}
        >
          {stats.map(stat => <MenuItem key={stat._id} value={stat._id}>{stat.name}</MenuItem>)}
        </StyledSelect>

    </DivFlex>
  );
};

export default StatsFilters;
