import React from "react";
import { FlexDiv, StyledMenuItem, StyledSelect } from "../styles/styles";

const SEASONS = [
  { value: '2223', label: 'Temporada 22-23' },
  { value: '2122', label: 'Temporada 21-22' },
  { value: '2021', label: 'Temporada 20-21' },
  { value: '1920', label: 'Temporada 19-20' },
  { value: '1819', label: 'Temporada 18-19' },
  { value: '1718', label: 'Temporada 17-18' },
  { value: '1617', label: 'Temporada 16-17' },
  { value: '1516', label: 'Temporada 15-16' },
  { value: '1415', label: 'Temporada 14-15' },
  { value: '1314', label: 'Temporada 13-14' },
  { value: '1213', label: 'Temporada 12-13' },
  { value: '1112', label: 'Temporada 11-12' },
  { value: '1011', label: 'Temporada 10-11' },
  { value: '0910', label: 'Temporada 09-10' },
  { value: '0809', label: 'Temporada 08-09' },
  { value: '0708', label: 'Temporada 07-08' },
  { value: '0607', label: 'Temporada 06-07' },
  { value: '0506', label: 'Temporada 05-06' },
  { value: '0405', label: 'Temporada 04-05' },
  { value: '0304', label: 'Temporada 03-04' },
  { value: '0203', label: 'Temporada 02-03' },
  { value: '0102', label: 'Temporada 01-02' },
  { value: '0001', label: 'Temporada 00-01' },
  { value: '9900', label: 'Temporada 99-00' },
  { value: '9899', label: 'Temporada 98-99' },
  { value: '9798', label: 'Temporada 97-98' },
  { value: '9697', label: 'Temporada 96-97' },
  { value: '9596', label: 'Temporada 95-96' },
  { value: '9495', label: 'Temporada 94-95' },
  { value: '9394', label: 'Temporada 93-94' },
];

function SeasonSelector({ selectedSeason, setSelectedSeason }) {
  const [open, setOpen] = React.useState(false);

  return (
    <FlexDiv>
      <StyledSelect
          disableUnderline
          id="statSelector"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
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
          {SEASONS.map((season) => (
            <StyledMenuItem key={season.value} value={season.value}>
              {season.label}
            </StyledMenuItem>
          ))}
        </StyledSelect>
    </FlexDiv>
  );
}

export default SeasonSelector;