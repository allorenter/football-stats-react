import { Button, Grid, MenuItem, Select, Table } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";

export const colors = {
  primary: "#1C1E23",
  secondary: "#313641",
  tertiary: "#3E424E",
  detailsColor: "#93A9EC",
  font: "#FFFFFF",
};

export const StyledButton = styled(Button)({
  background: colors.detailsColor,
  color: colors.font,
  maxHeight: "1.8rem",
});

export const FlexDiv = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const lightenDarkenColor = (col, amt) => {
  var usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

export const ContentMenu = styled(Grid)({
  padding: ".1rem 2.5rem",
  background: colors.primary,
  minHeight: "6.5vh",
  "@media (max-width: 959px)": {
    padding: '0 0 2px 0',
  }
});

export const StyledTable = styled(Table)({
  height: "93.5vh",
  background: colors.tertiary,
  "& tr td, tr th": {
    width: "9%",
    color: colors.font,
    borderBottom: `none`,
    transition: "0.3s",
  },
  "& tr:hover td": {
    background: lightenDarkenColor(colors.tertiary, 30),
  },
  "& tr:nth-child(2) th": {
    borderBottom: `2px solid ${colors.detailsColor}`,
  },
  "& tr th": {
    color: colors.font,
    borderBottom: "none",
    fontWeight: "600",
  },
  "& .c1": {
    color: colors.font,
    background: colors.tertiary
  },
  "& .c2": {
    color: colors.font,
    background: colors.secondary
  }
});

export const darkenOpacity = makeStyles({
  root: {
    opacity: ".2"
  },
});

export const lightenOpacity = makeStyles({
  root: {
    opacity: "1"
  },
});

export const StyledSelect = styled(Select)({
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

export const StyledMenuItem = styled(MenuItem)({
  fontSize: ".85rem",
  minWidth: "176px",
});