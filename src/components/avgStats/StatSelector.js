import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { colors, FlexDiv, lightenDarkenColor } from "../../styles/styles";
import { MenuItem, Select } from "@material-ui/core";
import { getAvailableStats } from "../../utils/api";
import Loading from "../Loading";

const StatSelector = (props) => {
  const [stats, setStats] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const StyledSelect = styled(Select)({
    color: colors.font,
    fontWeight: "600",
    paddingLeft: "8px",
    background: lightenDarkenColor(colors.tertiary, 30),
    borderRadius: "4px",
    fontSize: ".85rem",
    minWidth: "190px",
    paddingTop: "1px",
    "& svg": {
      color: colors.font,
    },
    "&:hover": {
      opacity: ".8",
    },
  });

  const StyledMenuItem = styled(MenuItem)({
    fontSize: ".85rem",
    minWidth: "176px",
  });

  useEffect(() => {
    setLoading(true);
    getAvailableStats()
      .then((res) => {
        setStats(res.data.data);
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
