import React, { useState, useEffect } from "react";
import { FlexDiv, StyledMenuItem, StyledSelect } from "../../styles/styles";
import { getAvailableStats } from "../../service/api";
import Loading from "../Loading";

const StatSelector = (props) => {
  const [stats, setStats] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAvailableStats()
      .then((res) => { 
        setStats(res.data.data.length > 0 ?  res.data.data : [{ _id: "ftg", name: "Goles"}]);
        setLoading(false);
      })
      .catch((e) => {});
  }, []);

  return (
    <FlexDiv>
      {loading ? (
        <Loading size="1.8em" />
      ) : (
        <StyledSelect
          disableUnderline
          id="statSelector"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={props.selectedStat}
          onChange={(e) => props.setSelectedStat(e.target.value)}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          {stats.map((stat) => (
            <StyledMenuItem key={stat._id} value={stat._id}>
              {stat.name}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      )}
    </FlexDiv>
  );
};

export default StatSelector;
